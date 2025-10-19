import { useMemo } from "react";
import { CalendarEvent as CalendarEventType } from "@/components/calendar/calendar-types";
import { useCalendarContext } from "@/components/calendar/calendar-context";
import { isSameDay, isSameMonth } from "date-fns";
import { cn } from "@/lib/utils";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { CalendarEventCard } from "@/components/calendar/calendar-event-card";
import { HOUR_BLOCK_HEIGHT_PX, getHourIndex } from "./calendar-constants";

interface EventPosition {
  left: string;
  width: string;
  top: string;
  height: string;
}

interface EventLayoutInfo {
  column: number;
  columns: number;
}

function buildDayEventLayout(events: CalendarEventType[]): Map<string, EventLayoutInfo> {
  const layout = new Map<string, EventLayoutInfo>();

  if (events.length <= 1) {
    if (events[0]) {
      layout.set(events[0].id, { column: 0, columns: 1 });
    }
    return layout;
  }

  const sorted = [...events].sort((a, b) => {
    const startDiff = a.start.getTime() - b.start.getTime();
    if (startDiff !== 0) return startDiff;
    return a.end.getTime() - b.end.getTime();
  });

  const active: Array<{ event: CalendarEventType; column: number }> = [];

  for (const event of sorted) {
    const eventStart = event.start.getTime();

    for (let i = active.length - 1; i >= 0; i -= 1) {
      if (active[i].event.end.getTime() <= eventStart) {
        active.splice(i, 1);
      }
    }

    const usedColumns = new Set(active.map((item) => item.column));
    let column = 0;
    while (usedColumns.has(column)) {
      column += 1;
    }

    const concurrencyAfterAdd = active.length + 1;

    layout.set(event.id, {
      column,
      columns: concurrencyAfterAdd,
    });

    active.push({ event, column });

    const concurrency = active.length;

    for (const item of active) {
      const info = layout.get(item.event.id);
      if (info) {
        info.columns = Math.max(info.columns, concurrency);
      }
    }
  }

  return layout;
}

function calculateEventPosition(event: CalendarEventType, layoutInfo: EventLayoutInfo): EventPosition {
  const startHour = event.start.getHours();
  const startMinutes = event.start.getMinutes();

  let endHour = event.end.getHours();
  let endMinutes = event.end.getMinutes();

  if (!isSameDay(event.start, event.end)) {
    endHour = 23;
    endMinutes = 59;
  }

  const startIndex = getHourIndex(startHour);
  const topPosition = (startIndex + startMinutes / 60) * HOUR_BLOCK_HEIGHT_PX;
  const duration = endHour * 60 + endMinutes - (startHour * 60 + startMinutes);
  const height = Math.max((duration / 60) * HOUR_BLOCK_HEIGHT_PX, 4);

  const safeColumns = Math.max(layoutInfo.columns || 1, 1);
  const widthPercent = 100 / safeColumns;
  const leftPercent = widthPercent * (layoutInfo.column || 0);

  return {
    left: `${leftPercent}%`,
    width: `${widthPercent}%`,
    top: `${topPosition}px`,
    height: `${height}px`,
  };
}

export default function CalendarEvent({
  event,
  month = false,
  className,
}: {
  event: CalendarEventType;
  month?: boolean;
  className?: string;
}) {
  const { events, setSelectedEvent, setManageEventDialogOpen, date } = useCalendarContext();
  const dayEvents = useMemo(() => {
    if (month) return [] as CalendarEventType[];
    return events.filter((item) => isSameDay(item.start, event.start));
  }, [events, event.start, month]);

  const dayLayout = useMemo(() => {
    if (month) return new Map<string, EventLayoutInfo>();
    return buildDayEventLayout(dayEvents);
  }, [dayEvents, month]);

  const layoutInfo = month ? { column: 0, columns: 1 } : dayLayout.get(event.id) ?? { column: 0, columns: 1 };
  const style = month ? {} : calculateEventPosition(event, layoutInfo);

  // Generate a unique key that includes the current month to prevent animation conflicts
  const isEventInCurrentMonth = isSameMonth(event.start, date);
  const animationKey = `${event.id}-${isEventInCurrentMonth ? "current" : "adjacent"}`;

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.div
          className={cn("group relative", !month && "absolute", className)}
          style={style}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedEvent(event);
            setManageEventDialogOpen(true);
          }}
          initial={{
            opacity: 0,
            y: -3,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: {
              duration: 0.2,
              ease: "linear",
            },
            layout: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          layoutId={`event-${animationKey}-${month ? "month" : "day"}`}
        >
          <CalendarEventCard
            event={event}
            condensed={month || event.end.getTime() - event.start.getTime() < 60 * 60 * 1000}
          />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}

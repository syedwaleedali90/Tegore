import { useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { HOUR_BLOCK_HEIGHT_PX, HEADER_BLOCK_HEIGHT_PX, HOURS, getHourIndex } from "./calendar-constants";

interface CalendarTimeIndicatorProps {
  className?: string;
  date?: Date;
  variant?: "default" | "column";
}

export default function CalendarTimeIndicator({ className, date, variant = "default" }: CalendarTimeIndicatorProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  // const currentTime = new Date("2025-09-29T10:56:18.507Z");
  useEffect(() => {
    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the position of the current time
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // Only show indicator for hours that are visible (7 AM to 6 AM next day)
  const isVisibleHour = HOURS.includes(currentHour) || (currentHour >= 0 && currentHour <= 6);

  if (!isVisibleHour) {
    return null;
  }

  const hourIndex = getHourIndex(currentHour);
  const topPosition = (hourIndex + currentMinutes / 60) * HOUR_BLOCK_HEIGHT_PX + HEADER_BLOCK_HEIGHT_PX;

  const shouldHighlightCurrentDay = date ? isSameDay(currentTime, date) : false;

  const isColumnVariant = variant === "column";

  if (isColumnVariant && !shouldHighlightCurrentDay) {
    return null;
  }

  const style = isColumnVariant
    ? { top: `${topPosition}px`, left: 0, right: 0 }
    : { top: `${topPosition}px`, right: 0, width: `calc(100% - 100px)` };

  return (
    <div className={cn("absolute pointer-events-none flex items-center z-20", className)} style={style}>
      {/* Time indicator line */}
      <div
        className={cn(
          "w-full relative border-b",
          shouldHighlightCurrentDay ? "border-primary border-solid" : "border-primary border-dashed"
        )}
      >
        {shouldHighlightCurrentDay && (
          <div className="absolute left-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary" />
        )}
        {shouldHighlightCurrentDay && (
          <div className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary" />
        )}
        {/* Time */}
        {!isColumnVariant && (
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-xs text-primary">
            {format(currentTime, "h:mm")}
          </div>
        )}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useCalendarContext } from "@/components/calendar/calendar-context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addDays,
  addMonths,
  addWeeks,
  subDays,
  subMonths,
  subWeeks,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  startOfWeek,
} from "date-fns";

export default function CalendarHeaderDateChevrons() {
  const { mode, date, setDate } = useCalendarContext();

  function handleDateBackward() {
    switch (mode) {
      case "month":
        setDate(subMonths(date, 1));
        break;
      case "week":
        setDate(subWeeks(date, 1));
        break;
      case "day":
        setDate(subDays(date, 1));
        break;
    }
  }

  function handleDateForward() {
    switch (mode) {
      case "month":
        setDate(addMonths(date, 1));
        break;
      case "week":
        setDate(addWeeks(date, 1));
        break;
      case "day":
        setDate(addDays(date, 1));
        break;
    }
  }

  const firstDateOfMonth = startOfMonth(date);
  const lastDateOfMonth = endOfMonth(date);
  const firstDateOfWeek = startOfWeek(date, { weekStartsOn: 1 });
  const lastDateOfWeek = endOfWeek(date, { weekStartsOn: 1 });

  const dateRange =
    mode === "month"
      ? format(firstDateOfMonth, "MMM d, yyyy") + " - " + format(lastDateOfMonth, "MMM d, yyyy")
      : mode === "week"
      ? format(firstDateOfWeek, "MMM d, yyyy") + " - " + format(lastDateOfWeek, "MMM d, yyyy")
      : format(date, "MMM d, yyyy");

  return (
    <div className="flex items-center gap-2 text-xs text-neutral-70">
      <Button variant="outline" className="size-6 rounded-full" onClick={handleDateBackward}>
        <ChevronLeft />
      </Button>

      <span className="min-w-[140px] text-center">{dateRange}</span>

      <Button variant="outline" className="size-6 rounded-full" onClick={handleDateForward}>
        <ChevronRight />
      </Button>
    </div>
  );
}

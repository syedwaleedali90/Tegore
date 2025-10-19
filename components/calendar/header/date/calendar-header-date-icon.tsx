import { format } from "date-fns";
import { useCalendarContext } from "@/components/calendar/calendar-context";

export default function CalendarHeaderDateIcon() {
  const { calendarIconIsToday, date: calendarDate, setDate } = useCalendarContext();
  const date = calendarIconIsToday ? new Date() : calendarDate;

  return (
    <div
      className="flex h-13 w-13 flex-col items-center justify-center rounded-md border shadow-xs text-xs cursor-pointer"
      onClick={() => setDate(date)}
    >
      <span className="font-medium uppercase text-neutral-70">{format(date, "MMM")}</span>
      <span className="font-bold text-neutral-black pt-0.5">{format(date, "dd")}</span>
    </div>
  );
}

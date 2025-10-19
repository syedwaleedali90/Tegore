import { useCalendarContext } from "@/components/calendar/calendar-context";
import { format } from "date-fns";
import CalendarHeaderDateIcon from "./calendar-header-date-icon";
import CalendarHeaderDateChevrons from "./calendar-header-date-chevrons";
import CalendarHeaderDateBadge from "./calendar-header-date-badge";

export default function CalendarHeaderDate() {
  const { date } = useCalendarContext();
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <CalendarHeaderDateIcon />
      <div>
        <div className="flex items-center gap-1">
          <p className="text-xl font-medium text-neutral-black">{format(date, "MMMM, yyyy")}</p>
          <CalendarHeaderDateBadge />
        </div>
        <CalendarHeaderDateChevrons />
      </div>
    </div>
  );
}

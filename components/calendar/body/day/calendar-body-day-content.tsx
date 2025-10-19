import { useCalendarContext } from "@/components/calendar/calendar-context";
import { isSameDay } from "date-fns";
import CalendarBodyHeader from "@/components/calendar/body/calendar-body-header";
import CalendarEvent from "@/components/calendar/calendar-event";
import { HOURS } from "@/components/calendar/calendar-constants";

export default function CalendarBodyDayContent({ date }: { date: Date }) {
  const { events } = useCalendarContext();

  const dayEvents = events.filter((event) => isSameDay(event.start, date));

  return (
    <div className="flex flex-col flex-grow">
      <CalendarBodyHeader date={date} />

      <div className="flex-1 relative">
        {HOURS.map((hour) => (
          <div key={hour} className="border-b border-border/50 group" style={{ height: "100px" }} />
        ))}

        {dayEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

import CalendarBodyDayCalendar from "./calendar-body-day-calendar";
import CalendarBodyDayEvents from "./calendar-body-day-events";
import { useCalendarContext } from "@/components/calendar/calendar-context";
import CalendarBodyDayContent from "./calendar-body-day-content";
import CalendarBodyMarginDayMargin from "./calendar-body-margin-day-margin";
import CalendarTimeIndicator from "@/components/calendar/calendar-time-indicator";

export default function CalendarBodyDay() {
  const { date } = useCalendarContext();
  return (
    <div className="flex divide-x flex-grow overflow-hidden">
      <div className="flex flex-col flex-grow divide-y overflow-hidden">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="relative flex flex-1 divide-x">
            <CalendarBodyMarginDayMargin />
            <div className="relative flex-1">
              <CalendarBodyDayContent date={date} />
              <CalendarTimeIndicator date={date} variant="column" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden flex-col flex-grow divide-y max-w-[276px]">
        <CalendarBodyDayCalendar />
        <CalendarBodyDayEvents />
      </div>
    </div>
  );
}

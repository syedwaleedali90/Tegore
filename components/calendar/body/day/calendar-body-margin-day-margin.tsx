import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  HOURS,
  DEFAULT_TIMEZONE,
} from "@/components/calendar/calendar-constants";

export default function CalendarBodyMarginDayMargin({ className }: { className?: string }) {
  return (
    <div className={cn("sticky left-0 w-full max-w-25 bg-background z-10 flex flex-col text-neutral-black", className)}>
      <div
        className={cn(
          "sticky flex items-center justify-center top-0 left-0 bg-background z-20 border-b text-center font-medium",
          `h-[72px]`
        )}
      >
        {DEFAULT_TIMEZONE}
      </div>
      <div className="sticky left-0 w-full max-w-25 bg-background z-10 flex flex-col">
        {HOURS.map((hour) => (
          <div
            key={hour}
            className="relative first:mt-0 text-center text-xs py-2 border-b"
            style={{ height: "100px" }}
          >
            {format(new Date().setHours(hour, 0, 0, 0), "h:mm a")}
          </div>
        ))}
      </div>
    </div>
  );
}

import { format, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";

export default function CalendarBodyHeader({ date }: { date: Date }) {
  const isToday = isSameDay(date, new Date());

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 py-2 w-full sticky top-0 bg-background z-10 border-b text-xl font-medium",
        `h-[72px]`
      )}
    >
      <span className={cn(isToday ? "text-primary" : "text-neutral-70")}>{format(date, "EEE")}</span>
      <span
        className={cn(
          "text-neutral-80",
          isToday && "text-white bg-primary rounded-full w-10 h-10 flex items-center justify-center"
        )}
      >
        {format(date, "dd")}
      </span>
    </div>
  );
}

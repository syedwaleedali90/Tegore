import { format } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { resolveEventAppearance, resolvePriorityToken } from "@/components/calendar/calendar-theme";
import { CalendarEvent } from "@/components/calendar/calendar-types";
import { AvatarStack } from "../ui/avatar-stack";
import { useCalendar } from "@/components/calendar/calendar-provider";

interface CalendarEventCardProps {
  event: CalendarEvent;
  condensed?: boolean;
}

export function CalendarEventCard({ event, condensed = false }: CalendarEventCardProps) {
  const appearanceTokens = resolveEventAppearance(event.appearance);
  const priorityToken = resolvePriorityToken(event.priority);
const { openSidebar } = useCalendar();

  return (
    <motion.div
      onClick={() => openSidebar(event)}
      layout="position"
      className={cn(
        "relative flex flex-col gap-3 rounded-lg border shadow-sm h-full overflow-hidden m-0.5 z-30",
        condensed ? "pl-2 pr-1 py-1" : "pl-3 pr-2 py-2",
        appearanceTokens.background,
        appearanceTokens.border,
        appearanceTokens.borderStyle === "dashed" ? "border-dashed" : "border-solid"
      )}
    >
      {appearanceTokens.borderStyle !== "dashed" && (
        <span className={cn("absolute left-0 top-0 h-full w-[3px]", appearanceTokens.accent)} />
      )}

      <div className="flex flex-col gap-3 justify-between flex-1">
        <div className="flex items-start gap-1">
          {event.appearance !== "momsAdded" && event.appearance !== "engagementQualification" && (
            <appearanceTokens.icon className={cn("size-4 mt-0.5", appearanceTokens.iconColor)} />
          )}
          <div className="flex flex-col gap-1 min-w-0">
            <p className={cn("truncate font-medium text-neutral-black", condensed ? "text-[12px]" : "text-sm")}>
              {event.title}
            </p>
            <p className="truncate text-neutral-70 text-[10px]">
              {format(event.start, "hh:mm a")} - {format(event.end, "hh:mm a")}
            </p>
          </div>

          {condensed && (event.appearance === "momsAdded" || event.appearance === "engagementQualification") && (
            <appearanceTokens.icon className={cn("size-4 mt-0.5 ml-auto", appearanceTokens.iconColor)} />
          )}
        </div>

        {!condensed && (
          <div className="flex items-center justify-between gap-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold",
                priorityToken.background,
                priorityToken.text
              )}
            >
              {event.priority ? event.priority.charAt(0).toUpperCase() + event.priority.slice(1) : "Low"}
            </span>
            {!condensed && (event.appearance === "momsAdded" || event.appearance === "engagementQualification") && (
              <appearanceTokens.icon className={cn("size-4", appearanceTokens.iconColor)} />
            )}

            {event.attendees && event.attendees.length > 0 && (
              <AvatarStack
                avatars={event.attendees?.map((attendee) => ({ name: attendee.name, image: attendee.image })) || []}
                maxAvatarsAmount={2}
                avatarClassName="size-6 text-xs border border-white"
                spacing="xl"
              />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

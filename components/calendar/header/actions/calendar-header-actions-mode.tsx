"use client";

import { Mode, calendarModes } from "@/components/calendar/calendar-types";
import { useCalendarContext } from "@/components/calendar/calendar-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CalendarHeaderActionsMode() {
  const { mode, setMode } = useCalendarContext();

  return (
    <Select
      defaultValue={mode}
      onValueChange={(value) => {
        setMode(value as Mode);
      }}
    >
      <SelectTrigger size="lg">
        <SelectValue placeholder="Select week or day" />
      </SelectTrigger>
      <SelectContent>
        {calendarModes.map((mode) => (
          <SelectItem key={mode} value={mode}>
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

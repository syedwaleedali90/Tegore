import { Button } from "@/components/ui/button";
import { Filter, MoreVertical, Plus, Settings } from "lucide-react";
import { useCalendarContext } from "@/components/calendar/calendar-context";

export default function CalendarHeaderActionsAll() {
  const { setNewEventDialogOpen } = useCalendarContext();
  return (
    <div className="flex md:justify-start justify-between items-center gap-4">
      <Button onClick={() => setNewEventDialogOpen(true)} size="lg">
        <Plus className="size-5" />
        <span className="hidden sm:inline">Add Event</span>
      </Button>
      <Button variant="outline" size="lg">
        <Filter className="size-5 text-primary" />
        <span className="hidden sm:inline">Filters</span>
      </Button>

      <Button variant="outline" size="icon" aria-label="Open settings">
        <Settings className="size-5 text-primary" />
      </Button>

      <Button variant="outline" size="icon" aria-label="More options">
        <MoreVertical className="size-5" />
      </Button>
    </div>
  );
}

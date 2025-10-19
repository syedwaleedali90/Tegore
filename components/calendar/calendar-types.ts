import type { CalendarEventAppearance, CalendarEventPriority } from "@/components/calendar/calendar-theme";
export type CalendarProps = {
  events: CalendarEvent[];
  setEvents: (events: CalendarEvent[]) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  date: Date;
  setDate: (date: Date) => void;
  calendarIconIsToday?: boolean;
};

export type CalendarContextType = CalendarProps & {
  newEventDialogOpen: boolean;
  setNewEventDialogOpen: (open: boolean) => void;
  manageEventDialogOpen: boolean;
  setManageEventDialogOpen: (open: boolean) => void;
  selectedEvent: CalendarEvent | null;
  setSelectedEvent: (event: CalendarEvent | null) => void;

  openSidebar: (event: CalendarEvent) => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
};
export type CalendarEvent = {
  id: string;
  title: string;
  color: string;
  start: Date;
  end: Date;
  appearance?: CalendarEventAppearance;
  priority?: CalendarEventPriority;
  attendees?: { name: string; image: string }[];
};

export const calendarModes = ["day", "week", "month"] as const;
export type Mode = (typeof calendarModes)[number];

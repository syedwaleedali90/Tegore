import type { CalendarEvent } from "@/components/calendar/calendar-types";
import type { CalendarEventAppearance, CalendarEventPriority } from "@/components/calendar/calendar-theme";
import { addDays, startOfMonth } from "date-fns";
import { colorOptions } from "@/components/calendar/calendar-constants";

const EVENT_TITLES = [
  "Team Standup",
  "Project Review",
  "Client Meeting",
  "Design Workshop",
  "Code Review",
  "Sprint Planning",
  "Product Demo",
  "Architecture Discussion",
  "User Testing",
  "Stakeholder Update",
  "Tech Talk",
  "Deployment Planning",
  "Bug Triage",
  "Feature Planning",
  "Team Training",
];

// Extract color values from colorOptions
const EVENT_COLORS = colorOptions.map((color) => color.value);

function getRandomTime(date: Date): Date {
  const hours = Math.floor(Math.random() * 14) + 8; // 8 AM to 10 PM
  const minutes = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
  return new Date(date.setHours(hours, minutes, 0, 0));
}

function generateEventDuration(): number {
  const durations = [15, 30, 45, 60, 75, 90, 120, 180]; // in minutes
  // const durations = [15, 30, 45]; // in minutes
  return durations[Math.floor(Math.random() * durations.length)];
}

const APPEARANCES: CalendarEventAppearance[] = [
  "published",
  "drafted",
  "engagementQualification",
  "momsAdded",
  "unpublished",
];

const PRIORITIES: CalendarEventPriority[] = ["low", "medium", "high"];

export function generateMockEvents(): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const startDate = startOfMonth(new Date());

  // Generate 120 events over 3 months
  for (let i = 0; i < 120; i++) {
    // Random date between start and end
    const daysToAdd = Math.floor(Math.random() * 90); // 90 days = ~3 months
    const eventDate = addDays(startDate, daysToAdd);

    const startTime = getRandomTime(eventDate);
    const durationMinutes = generateEventDuration();
    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    events.push({
      id: `event-${i + 1}`,
      title: EVENT_TITLES[Math.floor(Math.random() * EVENT_TITLES.length)],
      color: EVENT_COLORS[Math.floor(Math.random() * EVENT_COLORS.length)],
      start: startTime,
      end: endTime,
      appearance: APPEARANCES[Math.floor(Math.random() * APPEARANCES.length)],
      priority: PRIORITIES[Math.floor(Math.random() * PRIORITIES.length)],
      attendees: Array.from({ length: Math.floor(Math.random() * 6) + 1 }, (_, index) => ({
        name: `Attendee ${index + 1}`,
        image: `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100)}`,
      })),
    });
  }

  // Sort events by start date
  return events.sort((a, b) => a.start.getTime() - b.start.getTime());
}

import type { LucideIcon } from "lucide-react";
import { Check, Hourglass, Pencil, UsersRound, NotepadText } from "lucide-react";

export type CalendarEventAppearance = "unpublished" | "drafted" | "published" | "engagementQualification" | "momsAdded";

export type CalendarEventPriority = "low" | "medium" | "high";

export type CalendarEventAppearanceToken = {
  background: string;
  border: string;
  accent: string;
  iconColor: string;
  borderStyle?: "dashed" | "solid";
  icon: LucideIcon;
};

export const CALENDAR_EVENT_APPEARANCE_TOKENS: Record<CalendarEventAppearance, CalendarEventAppearanceToken> = {
  unpublished: {
    background: "bg-neutral-white",
    border: "border-blue-primary",
    borderStyle: "dashed",
    accent: "bg-blue-primary",
    iconColor: "text-blue-primary",
    icon: Hourglass,
  },
  drafted: {
    background: "bg-neutral-white",
    border: "border-green-primary",
    borderStyle: "dashed",
    accent: "bg-green-primary",
    iconColor: "text-green-primary",
    icon: Pencil,
  },
  published: {
    background: "bg-blue-10",
    border: "border-blue-primary",
    accent: "bg-blue-primary",
    iconColor: "text-blue-primary",
    icon: Check,
  },
  engagementQualification: {
    background: "bg-green-10",
    border: "border-green-primary",
    accent: "bg-green-primary",
    iconColor: "text-green-primary",
    icon: UsersRound,
  },
  momsAdded: {
    background: "bg-amber-10",
    border: "border-amber-100",
    accent: "bg-amber-100",
    iconColor: "text-amber-100",
    icon: NotepadText,
  },
};

export const CALENDAR_EVENT_PRIORITY_TOKENS: Record<CalendarEventPriority, { background: string; text: string }> = {
  low: {
    background: "bg-green-primary",
    text: "text-white",
  },
  medium: {
    background: "bg-amber-100",
    text: "text-white",
  },
  high: {
    background: "bg-red-100",
    text: "text-white",
  },
};

export function resolveEventAppearance(appearance?: CalendarEventAppearance) {
  return appearance ? CALENDAR_EVENT_APPEARANCE_TOKENS[appearance] : CALENDAR_EVENT_APPEARANCE_TOKENS.published;
}

export function resolvePriorityToken(priority?: CalendarEventPriority) {
  return priority ? CALENDAR_EVENT_PRIORITY_TOKENS[priority] : CALENDAR_EVENT_PRIORITY_TOKENS.low;
}

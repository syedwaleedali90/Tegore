import { createContext, useContext, useState } from "react";
import type { CalendarProps } from "./calendar-types";
import CalendarHeader from "./header/calendar-header";
import CalendarBody from "./body/calendar-body";
import CalendarHeaderActions from "./header/actions/calendar-header-actions";
import CalendarHeaderDate from "./header/date/calendar-header-date";
import CalendarHeaderActionsMode from "./header/actions/calendar-header-actions-mode";
import CalendarHeaderActionsAll from "./header/actions/calendar-header-actions-all";
import CalendarProvider from "./calendar-provider";
import AddEventModal from "../custom-components/AddEventModal";
import { EventSidebar } from "../custom-components/EventSidebar";

export default function Calendar({
  events,
  setEvents,
  mode,
  setMode,
  date,
  setDate,
  calendarIconIsToday = true,
}: CalendarProps) {

  return (
    <CalendarProvider
      events={events}
      setEvents={setEvents}
      mode={mode}
      setMode={setMode}
      date={date}
      setDate={setDate}
      calendarIconIsToday={calendarIconIsToday}


    >
      <CalendarHeader>
        <CalendarHeaderDate />
        <CalendarHeaderActions>
          <CalendarHeaderActionsMode />
          <CalendarHeaderActionsAll />
        </CalendarHeaderActions>
      </CalendarHeader>
      <CalendarBody />
      <AddEventModal />
      <EventSidebar />
    </CalendarProvider>
  );
}

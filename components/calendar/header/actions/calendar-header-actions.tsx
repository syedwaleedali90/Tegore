export default function CalendarHeaderActions({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap md:justify-start justify-between items-center gap-4 md:gap-13">{children}</div>;
}

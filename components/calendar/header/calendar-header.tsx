export default function CalendarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex lg:flex-row flex-col lg:items-center justify-between p-4 md:p-6 gap-4 border-b">
      {children}
    </div>
  );
}

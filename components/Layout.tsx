import { ReactNode } from "react";
import LeftSticky from "./LeftSticky";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2">
        <LeftSticky />
      </div>
      <div className="md:w-1/2 flex flex-col">{children}</div>
    </main>
  );
}

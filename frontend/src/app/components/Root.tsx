import { Outlet } from "react-router";
import { AsuHeader } from "./AsuHeader";
import { AsuFooter } from "./AsuFooter";
import { ScrollToTop } from "./ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <AsuHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AsuFooter />
    </div>
  );
}
import React from "react";
import { ThemeToggle } from "../ui/theme-toggle";

export default function SiteNav() {
  return (
    <nav className="container flex items-center justify-between border-b py-2">
      <div>SiteNav</div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

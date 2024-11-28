"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
import InstructorSidebar from "./InstructorSidebar";
import StudentSidebar from "./StudentSidebar";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const partOfPathname = pathname?.split("/")[1]?.split("-")[0] || "";

  const isAdmin = partOfPathname === "admin";
  const isInstructor = partOfPathname === "instructor";

  const SidebarComponent = isAdmin
    ? AdminSidebar
    : isInstructor
    ? InstructorSidebar
    : StudentSidebar;

  return (
      <SidebarComponent />
  );
};

export default SidebarDashboard;

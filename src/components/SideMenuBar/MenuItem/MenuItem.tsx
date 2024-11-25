"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MenuItemType } from "@/types/MenuItemType";
import { usePathname } from "next/navigation";

export const MenuItem = ({ menuItem }: { menuItem: MenuItemType }) => {
  const pathname = usePathname();
  return (
    <SidebarMenuItem
      className={`${pathname === menuItem.link && "bg-slate-500 border-r-4 border-r-green-500"}`}
    >
      <SidebarMenuButton asChild>
        <a href={menuItem.link}>
          {menuItem.icon}
          <span>{menuItem.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

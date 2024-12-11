"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MenuNavItemType } from "@/types/MenuNavItemType";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuNavItem = ({
  menuNavItem,
}: {
  menuNavItem: MenuNavItemType;
}) => {
  const pathname = usePathname();
  return (
    <SidebarMenuItem
      className={`${pathname === menuNavItem.link && "bg-slate-500 border-r-4 border-r-green-500"}`}
    >
      <SidebarMenuButton asChild>
        <Link href={menuNavItem.link}>
          {menuNavItem.icon}
          <span>{menuNavItem.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

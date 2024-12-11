import { MenuNavItemType } from "@/types/MenuNavItemType";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import { CiHome } from "react-icons/ci";
import { FaPen, FaRegCalendarAlt, FaHistory } from "react-icons/fa";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MenuNavItem } from "./MenuItem/MenuItem";

const MenuNavItemList: MenuNavItemType[] = [
  { title: "ホーム", link: "/", icon: <CiHome /> },
  { title: "入力", link: "/input", icon: <FaPen /> },
  { title: "カレンダー", link: "/calendar", icon: <FaRegCalendarAlt /> },
  { title: "履歴", link: "/history", icon: <FaHistory /> },
];

export const SideMenubar = () => {
  return (
    <Sidebar>
      <SidebarContent className=" text-white bg-gray-700">
        <SidebarGroup>
          <div className="flex items-center">
            <AiOutlineMoneyCollect className="size-8" />
            <SidebarGroupLabel className="text-2xl text-white font-bold my-5">
              家計簿
            </SidebarGroupLabel>
          </div>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu className="gap-4">
              {MenuNavItemList.map((menuNavItem) => (
                <MenuNavItem
                  key={menuNavItem.title}
                  menuNavItem={menuNavItem}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

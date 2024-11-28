import { SideMenubar } from "@/components/SideMenuBar/SideMenubar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideMenubar />
      {children}
    </SidebarProvider>
  );
}

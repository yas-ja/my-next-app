import { SideMenubar } from "@/components/SideMenuBar/SideMenubar";
import { SidebarProvider } from "@/lib/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideMenubar />
      {children}
    </SidebarProvider>
  );
}

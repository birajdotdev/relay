import { ChatsSidebar } from "@/components/chats-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ChatsLayout({ children }: LayoutProps<"/chats">) {
  return (
    <SidebarProvider
      className="h-svh overflow-hidden"
      style={
        {
          "--sidebar-width": "420px",
        } as React.CSSProperties
      }
    >
      <ChatsSidebar />
      <SidebarInset className="overflow-hidden">{children}</SidebarInset>
    </SidebarProvider>
  );
}

"use client";

import * as React from "react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArchiveXIcon,
  Chat01Icon,
  FileIcon,
  SentIcon,
  Trash2,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// This is sample data
const navMain = [
  {
    title: "Chats",
    url: "/chats",
    icon: <HugeiconsIcon icon={Chat01Icon} />,
  },
  {
    title: "Drafts",
    url: "#",
    icon: <HugeiconsIcon icon={FileIcon} />,
  },
  {
    title: "Sent",
    url: "#",
    icon: <HugeiconsIcon icon={SentIcon} />,
  },
  {
    title: "Junk",
    url: "#",
    icon: <HugeiconsIcon icon={ArchiveXIcon} />,
  },
  {
    title: "Trash",
    url: "#",
    icon: <HugeiconsIcon icon={Trash2} />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="md:h-8 md:p-0"
              render={<Link href="/" />}
            >
              <Image src="/logo.svg" alt="Relay logo" width={32} height={32} />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-xl font-medium">Relay</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navMain.map((item) => {
                const isActive =
                  pathname === item.url ||
                  (item.url !== "/" && pathname?.startsWith(item.url));
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      isActive={isActive}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

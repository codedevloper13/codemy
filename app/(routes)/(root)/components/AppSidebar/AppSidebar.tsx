"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { platform, Teacherroutes } from "./AppSidebar.data";
import Link from "next/link";
import Image from "next/image";

// Menu items.

export function AppSidebar() {
    const  {state}  = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={35} height={35} unoptimized />
              {state === "expanded" && <h1 className=" text-primary text-1xl">Codemy</h1>}
            </div>
          </Link>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platform.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="p-1 rounded-lg text-white bg-primary !h-5 !w-5" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Teacher</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Teacherroutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="p-1 rounded-lg text-white bg-primary !h-5 !w-5" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                  {/* Add submenu here */}
                  {item.title === "Courses" && state === "expanded" && (
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton href="/teacher/courses/create">
                          <span>Create Course</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton href="/teacher/courses/manage">
                          <span>Manage Courses</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

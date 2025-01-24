"use client";
import {
  ChevronDown,
  LayoutPanelLeft,
  ChartPie,
  LogOutIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { handleSignOut } from "@/app/actions/authActions";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  {
    title: "Spaces",
    icon: LayoutPanelLeft,
    items: [
      { title: "All", url: "#", icon: null },
      { title: "Development", url: "#", icon: null },
      { title: "Marketing", url: "#", icon: null },
      { title: "Product", url: "#", icon: null },
    ],
  },
  {
    title: "Analytics",
    icon: ChartPie,
    items: [{ title: "Overview", url: "#", icon: null }],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [logoImage, setLogoImage] = useState("/assets/logos/logo_240_dark.svg");
  const { isMobile } = useSidebar();
  useEffect(() => {
    const updateLogoBasedOnTheme = () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const logo =
        currentTheme === "dark"
          ? "/assets/logos/logo_240_light.svg"
          : "/assets/logos/logo_240_dark.svg";
      setLogoImage(logo);
    };

    updateLogoBasedOnTheme();

    const observer = new MutationObserver(updateLogoBasedOnTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarTrigger style={{ marginTop: 12 }} disabledOnMobile />
      <SidebarContent style={{ paddingTop: isMobile ? 35 : 0 }}>
        <SidebarGroup>
          <SidebarGroupLabel
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 20,
            }}
          >
            <Link href="/">
              <Image src={logoImage} width={175} height={35} alt="logo" />
            </Link>
          </SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroupLabel
          style={{
            display: "flex",
            width: "100%",
            marginBottom: 20,
            justifyContent: "flex-end",
          }}
        >
          <form action={handleSignOut}>
            <Button
              className="hover:bg-red-400 hover:text-white shadow-none text-red-400 bg-transparent border border-red-400"
              variant="default"
              type="submit"
            >
              Sign out <LogOutIcon />
            </Button>
          </form>
        </SidebarGroupLabel>
      </SidebarFooter>
    </Sidebar>
  );
}

'use client';

import {
  Home,
  User,
  ShoppingBag,
  Server,
  Mail,
  ChevronUp,
  User2,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/use-auth';

const menuItems = [
  {
    title: 'Home',
    url: '/home',
    icon: Home,
    subItems: [],
  },
  {
    title: 'Profile',
    url: '#',
    icon: User,
    subItems: [
      { title: 'View Profile', url: '/profile/view' },
      { title: 'View Repositories', url: '/profile/repositories' },
    ],
  },
  {
    title: 'Shop',
    url: '/shop',
    icon: ShoppingBag,
    subItems: [],
  },
  {
    title: 'Services',
    url: '/services',
    icon: Server,
    subItems: [],
  },
  {
    title: 'Contact Us',
    url: '/contact',
    icon: Mail,
    subItems: [],
  },
];

export function AppSidebar() {
  const { logout } = useAuth();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                item.subItems.length > 0 ? (
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon className="mr-2" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="py-3 cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:shadow-none focus-visible:shadow-none">
                  <User2 /> Dan Quesada
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-full">
                <DropdownMenuItem className="w-[255px] p-1 px-10 hover:outline-0 hover:bg-slate-100">
                  View Account
                </DropdownMenuItem>
                <DropdownMenuItem className="w-[255px] p-1 px-10 hover:outline-0 hover:bg-slate-100">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="w-[255px] p-1 px-10 hover:outline-0 hover:bg-slate-100"
                  onClick={logout}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

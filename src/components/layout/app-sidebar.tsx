'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Feather,
  LayoutGrid,
  ShoppingBag,
  Brain,
  MessageSquareText,
  CircleUserRound,
  LogOut,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { href: '/', label: 'Eventos', icon: LayoutGrid },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBag },
  { href: '/mentor', label: 'Mentora IA', icon: Brain },
  { href: '/messages', label: 'Mensagens', icon: MessageSquareText },
  { href: '/profile', label: 'Perfil', icon: CircleUserRound },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-sidebar-primary group-data-[collapsible=icon]:hidden">
          <Feather className="h-6 w-6" />
          <span>AthenaConnect</span>
        </Link>
         <Link href="/" className="items-center gap-2 text-lg font-semibold text-sidebar-primary hidden group-data-[collapsible=icon]:flex">
          <Feather className="h-6 w-6" />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="flex-1 p-2">
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right', className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
                  className={cn(
                    pathname === item.href ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground',
                    "justify-start"
                  )}
                >
                  <a>
                    <item.icon className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
             <Link href="/settings" legacyBehavior passHref>
                <SidebarMenuButton 
                  asChild 
                  tooltip={{ children: "Configurações", side: 'right', className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
                  className="justify-start hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground"
                >
                  <a>
                    <Settings className="h-5 w-5" />
                    <span className="group-data-[collapsible=icon]:hidden">Configurações</span>
                  </a>
                </SidebarMenuButton>
              </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center text-sidebar-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground h-10 p-2">
              <LogOut className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden ml-2">Sair</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

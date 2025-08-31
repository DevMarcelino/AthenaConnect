import type { PropsWithChildren } from 'react';
import { AppSidebar } from './app-sidebar';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppHeader from './app-header';

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen">
      <Sidebar collapsible="icon">
        <AppSidebar />
      </Sidebar>
      <SidebarInset className="flex flex-col flex-1">
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </div>
  );
}

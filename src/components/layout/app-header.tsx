'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Feather } from 'lucide-react';
import Link from 'next/link';

export default function AppHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        {isMobile && <SidebarTrigger />}
        {!isMobile && (
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Feather className="h-6 w-6" />
            <span>AthenaConnect</span>
          </Link>
        )}
      </div>
      {/* Placeholder for User Menu or other header actions */}
      <div>
        {/* <UserNav /> */}
      </div>
    </header>
  );
}

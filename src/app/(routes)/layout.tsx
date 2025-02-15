import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/features/app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="absolute top-2" />
        <div className="bg-slate-50 h-14 px-10 py-3">
          <h2 className="font-bold">Home</h2>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}

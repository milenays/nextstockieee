"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Package, Users, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Products", icon: Package, href: "/products" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-gray-100">
              <nav className="flex flex-col p-4 space-y-4">
                {sidebarItems.map((item) => (
                  <Tooltip key={item.name}>
                    <TooltipTrigger asChild>
                      <Link href={item.href} className={`flex items-center p-2 rounded-md ${pathname === item.href ? "bg-gray-700" : ""}`}>
                        <item.icon className="w-6 h-6 mr-2" />
                        {item.name}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.name}</TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </aside>
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}

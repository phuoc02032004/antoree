import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from './Logo';
import { MobileMenuLink } from './MobileMenuLink';
import AuthButtons from './AuthButtons';

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  path: string;
}

interface MoreMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MoreCategory {
  category: string;
  items: MoreMenuItem[];
}

interface MobileNavigationSheetProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  mainMenuItems: MenuItem[];
  moreMenuItems: MoreCategory[];
}

const MobileNavigationSheet: React.FC<MobileNavigationSheetProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  mainMenuItems,
  moreMenuItems,
}) => {
  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-96 p-0 bg-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Logo />
          </div>

          <div className="flex-1 overflow-y-auto">
            {mainMenuItems.map((item, index) => (
              <MobileMenuLink
                key={index}
                icon={item.icon}
                title={item.title}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}

            <div className="border-t border-gray-200 mt-2 pt-2">
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  More Options
                </span>
              </div>
              {moreMenuItems.map((category) =>
                category.items.map((item, index) => (
                  <MobileMenuLink
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 space-y-2">
            <AuthButtons className="flex-col space-x-0 space-y-2" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigationSheet;
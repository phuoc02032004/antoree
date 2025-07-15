import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { MenuLink, type MenuLinkProps } from './MenuLink';

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  path: string;
}

interface MoreMenuItem extends MenuLinkProps {}

interface MoreCategory {
  category: string;
  items: MoreMenuItem[];
}

interface DesktopNavigationProps {
  mainMenuItems: MenuItem[];
  moreMenuItems: MoreCategory[];
  quickLinks: string[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  mainMenuItems,
  moreMenuItems,
  quickLinks,
}) => {
  return (
    <div className="hidden lg:flex items-center space-x-1">
      {mainMenuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="text-gray-700 hover:text-orange-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center"
        >
          {item.title}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-orange-600 hover:bg-blue-50 px-3 py-2 text-sm font-medium transition-colors"
          >
            More <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[800px] p-0 mt-2 shadow-xl border border-gray-200 rounded-2xl overflow-hidden"
          align="end"
        >
          <div className="flex bg-white">
            <div className="flex-1 p-6">
              <div className="grid grid-cols-3 gap-8">
                {moreMenuItems.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-3">
                      {category.category}
                    </h3>
                    <div className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <MenuLink
                          key={itemIndex}
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-48 bg-gradient-to-b from-gray-50 to-gray-100 p-6 border-l border-gray-200">
              <h3 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-sm text-gray-700 hover:text-orange-600 py-2 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DesktopNavigation;
import React from 'react';

export interface MenuLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export const MenuLink = ({ icon, title, description, onClick, className = "" }: MenuLinkProps) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      if(onClick) onClick();
    }}
    className={`flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-gray-50 hover:shadow-sm group ${className}`}
  >
    <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-gray-600 group-hover:text-blue-600 transition-colors">
      {icon}
    </div>
    <div>
      <p className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </a>
);
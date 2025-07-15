import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

export interface MobileMenuLinkProps {
  icon: React.ReactNode;
  title: string;
  to?: string; 
  onClick?: () => void;
  badge?: React.ReactNode;
}

export const MobileMenuLink = ({ icon, title, to, onClick, badge }: MobileMenuLinkProps) => {
  const content = (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 text-gray-600">{icon}</div>
        <span className="font-medium text-gray-900">{title}</span>
      </div>
      {badge && (
        <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
          {badge}
        </Badge>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if(onClick) onClick();
      }}
    >
      {content}
    </a>
  );
};
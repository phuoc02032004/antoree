import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/store";
import { Logo } from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigationSheet from "./MobileNavigationSheet";
import AuthButtons from "./AuthButtons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Home,
  BookOpen,
  Heart,
  History,
  Users,
  Monitor,
  FileText,
  Search,
  BookMarked,
  User,
  Headphones,
  MessageCircle,
  Phone,
  Tag,
  Shield,
  MessageSquare,
  Mail,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const mainMenuItems = [
    { icon: <Home className="w-5 h-5" />, title: "Home", path: "/" },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Courses",
      path: "/courses",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Favorites",
      path: "/favorites",
    },
    {
      icon: <History className="w-5 h-5" />,
      title: "History",
      path: "/viewed-history",
    },
    { icon: <Users className="w-5 h-5" />, title: "About", path: "#" },
  ];

  const moreMenuItems = [
    {
      category: "Learning",
      items: [
        {
          icon: <Monitor />,
          title: "Online Courses",
          description: "Interactive courses for all levels",
        },
        {
          icon: <FileText />,
          title: "Resources",
          description: "Study materials and guides",
        },
        {
          icon: <Search />,
          title: "Course Search",
          description: "Find your perfect course",
        },
        {
          icon: <BookMarked />,
          title: "Learning Paths",
          description: "Structured learning journeys",
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          icon: <User />,
          title: "Dashboard",
          description: "Track your progress",
        },
        {
          icon: <Headphones />,
          title: "Help Center",
          description: "Get help when you need it",
        },
        {
          icon: <MessageCircle />,
          title: "Feedback",
          description: "Share your thoughts",
        },
        {
          icon: <Phone />,
          title: "Contact",
          description: "Reach out to our team",
        },
      ],
    },
    {
      category: "More",
      items: [
        {
          icon: <Tag />,
          title: "Special Offers",
          description: "Latest deals and discounts",
        },
        {
          icon: <Shield />,
          title: "Privacy Policy",
          description: "Your data protection",
        },
        {
          icon: <MessageSquare />,
          title: "Community",
          description: "Connect with learners",
        },
        { icon: <Mail />, title: "Newsletter", description: "Stay updated" },
      ],
    },
  ];

  const quickLinks = [
    "Help Center",
    "Student Guide",
    "Certification",
    "Mobile App",
    "Affiliate Program",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <DesktopNavigation
            mainMenuItems={mainMenuItems}
            moreMenuItems={moreMenuItems}
            quickLinks={quickLinks}
          />

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            {/* <ModeToggle /> */}

            <AuthButtons className="hidden md:flex" />

            <MobileNavigationSheet
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              mainMenuItems={mainMenuItems}
              moreMenuItems={moreMenuItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

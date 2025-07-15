import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className = "" }) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogin = () => {
    //Open page Sign in and request
    localStorage.setItem('token', 'your_placeholder_token_here');
    window.location.reload();
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {!localStorage.getItem('token') ? (
        <>
          <Button
            variant="outline"
            className="text-gray-700 border-gray-300 hover:bg-gray-50 px-4 py-2 h-9 text-sm font-medium"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 h-9 text-sm font-medium shadow-sm"
          >
            Get Started
          </Button >
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className='hover:bg-gray-100'
              size='icon'
              variant='ghost'
            >
              <User className="h-5 w-5 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white">
            <DropdownMenuItem onClick={() => setShowLogoutConfirm(true)}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Are you sure you want to log out?</DialogTitle>
            <DialogDescription>
              Logging out will end your current session. You will need to sign in again to access your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button className='bg-red-200' onClick={handleLogout}>Logout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthButtons;
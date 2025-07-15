import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CartHeaderProps {
  cartItemsCount: number;
}

const CartHeader: React.FC<CartHeaderProps> = ({ }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Link to="/courses">
          <Button variant="ghost" size="sm" className="text-[#E5593F] hover:bg-[#E5593F]/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>
      {/* <div className="flex items-center space-x-2">
        <ShoppingCart className="h-6 w-6 text-[#E5593F]" />
        <Badge className="bg-[#E5593F] text-white rounded-full px-2 py-1 text-sm">
          {cartItemsCount}
        </Badge>
      </div> */}
    </div>
  );
};

export default CartHeader;
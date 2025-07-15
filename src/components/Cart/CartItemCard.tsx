import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/cartSlice';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '@/types/Cart';
import { toast } from 'sonner';

interface CartItemCardProps {
  item: CartItem;
  isLastItem: boolean;
  formatPrice: (price: number) => string;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, isLastItem, formatPrice }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (courseId: string, courseTitle: string) => {
    dispatch(removeFromCart(courseId));
    toast.success(`"${courseTitle}" has been removed from your cart.`);
  };

  // const handleQuantityChange = (courseId: string, quantity: number) => {
  //   if (quantity > 0) {
  //     dispatch(updateQuantity({ courseId, quantity }));
  //   }
  // };

  // const increaseQuantity = (courseId: string, currentQuantity: number) => {
  //   dispatch(updateQuantity({ courseId, quantity: currentQuantity + 1 }));
  // };

  // const decreaseQuantity = (courseId: string, currentQuantity: number) => {
  //   if (currentQuantity > 1) {
  //     dispatch(updateQuantity({ courseId, quantity: currentQuantity - 1 }));
  //   }
  // };

  return (
    <>
      <div className="p-6 hover:bg-orange-50 transition-colors duration-200">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={item.course.thumbnailUrl}
              alt={item.course.title}
              className="w-32 h-24 object-cover rounded-lg shadow-md"
            />
            {/* <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
               {item.quantity}
             </Badge> */}
          </div>
          
          <div className="flex-1 min-w-0 ">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 text-left">
              {item.course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 flex items-center">
              <span className="w-2 h-2 bg-[#E5593F] rounded-full mr-2"></span>
              {item.course.instructor.name}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-[#E5593F]">
                {formatPrice(item.course.price)}
              </div>
              <div className="flex items-center space-x-2">
                {/*
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => decreaseQuantity(item.course.id, item.quantity)}
                  disabled={item.quantity <= 1}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.course.id, parseInt(e.target.value) || 1)}
                  className="w-16 text-center h-8"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => increaseQuantity(item.course.id, item.quantity)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-3 w-3" />
                </Button>
                */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFromCart(item.course.id, item.course.title)}
                  className="h-8 w-8 p-0 ml-4 text-[#E5593F] hover:bg-[#E5593F]/10"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLastItem && <Separator />}
    </>
  );
};

export default CartItemCard;
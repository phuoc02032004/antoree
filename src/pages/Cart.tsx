import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '@/store';
import { clearCart } from '@/store/cartSlice';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import CartHeader from '@/components/Cart/CartHeader';
import EmptyCartMessage from '@/components/Cart/EmptyCartMessage';
import CartItemCard from '@/components/Cart/CartItemCard';
import OrderSummaryCard from '@/components/Cart/OrderSummaryCard';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Commented out quantity-related functions as per user feedback
  // const handleRemoveFromCart = (courseId: string) => {
  //   dispatch(removeFromCart(courseId));
  // };

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

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.course.price, 0);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate('/thank-you');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <CartHeader cartItemsCount={cartItems.length} />

        {cartItems.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-[#E5593F] rounded-t-lg">
                  <CardTitle className="text-xl text-white">Selected Courses</CardTitle>
                </CardHeader>
                <div className="p-0">
                  {cartItems.map((item, index) => (
                    <CartItemCard
                      key={item.course.id}
                      item={item}
                      isLastItem={index === cartItems.length - 1}
                      formatPrice={formatPrice}
                    />
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <OrderSummaryCard
                cartItemsCount={cartItems.length}
                totalPrice={calculateTotalPrice()}
                formatPrice={formatPrice}
                onCheckOut={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
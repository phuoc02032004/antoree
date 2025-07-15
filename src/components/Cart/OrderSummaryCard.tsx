import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CreditCard } from 'lucide-react';

interface OrderSummaryCardProps {
  cartItemsCount: number;
  totalPrice: number;
  formatPrice: (price: number) => string;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  cartItemsCount,
  totalPrice,
  formatPrice,
}) => {
  return (
    <Card className="shadow-lg border-0 sticky top-8">
      <CardHeader className="bg-[#E5593F] text-white rounded-t-lg">
        <CardTitle className="text-xl flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Number of courses:</span>
            <span className="font-medium text-gray-900">{cartItemsCount}</span>
          </div>
          {/* Removed total quantity as per user feedback */}
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Service Fee:</span>
            <span className="font-semibold text-green-600">Free</span>
          </div>
          <Separator />
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-900">Total:</span>
            <span className="font-bold text-[#E5593F] text-2xl">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <Button className="w-full bg-[#E5593F] hover:bg-[#D44A30] text-white py-3 text-lg font-semibold shadow-lg">
            <CreditCard className="h-5 w-5 mr-2" />
            Checkout Now
          </Button>
          <Button variant="outline" className="w-full border-2 border-[#E5593F] text-[#E5593F] hover:bg-[#E5593F]/10">
            Save Cart
          </Button>
        </div>

        <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-sm text-orange-800 font-medium">
            💡 Tip: Complete payment within 24 hours to get 10% off!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const EmptyCartMessage: React.FC = () => {
  return (
    <Card className="max-w-md mx-auto shadow-lg border-0">
      <CardContent className="text-center py-16">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="h-10 w-10 text-[#E5593F]" />
        </div>
        <h3 className="text-xl font-semibold text-[#E5593F] mb-2">Cart is Empty</h3>
        <p className="text-gray-700 mb-6">Add some courses to your cart to start learning!</p>
        <Link to="/courses">
          <Button className="bg-[#E5593F] hover:bg-[#D44A30] text-white px-8 py-3">
            Explore Courses
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EmptyCartMessage;
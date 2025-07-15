import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-[#E5593F] mb-4">Thank You for Your Purchase!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your order has been successfully placed. We appreciate your business!
        </p>
        <Link to="/">
          <Button className="bg-[#E5593F] hover:bg-[#d44a30] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
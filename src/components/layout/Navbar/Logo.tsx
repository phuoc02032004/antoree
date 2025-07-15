import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Logo: React.FC = () => {
  const navigate = useNavigate()
  return(
  <div onClick={()=>navigate('/')} className="flex items-center space-x-2 hover:cursor-pointer">
    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">E</span>
    </div>
    <span className="text-xl font-bold text-gray-900">EduLearn</span>
  </div>
);
}
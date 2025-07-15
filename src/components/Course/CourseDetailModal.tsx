import React, { useEffect, useCallback, useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, CheckCircle2, User, Tag, DollarSign, Clock, Users, Award, Heart} from 'lucide-react';
import { type Course } from '@/types/Course';
import { type Category } from '@/types/Category';
import { useFavorites } from '@/hooks/useFavorites';
import { addCourseToViewed } from '@/hooks/useViewedCourses';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { toast } from "sonner"

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  formatPrice: (price: number) => string;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  categories,
  formatPrice,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const dispatch = useDispatch();
  const [showAllLearning, setShowAllLearning] = useState(false);

  const handleFavoriteClick = useCallback(() => {
    if (course) {
      const isCurrentlyFavorite = isFavorite(course.id);
      toggleFavorite(course.id);
      if (isCurrentlyFavorite) {
        toast("Removed from favorites!");
      } else {
        toast("Added to favorites!");
      }
    }
  }, [course, toggleFavorite, isFavorite]);

  const handleAddToCart = useCallback(() => {
    if (course) {
      dispatch(addToCart(course));
      toast('Add items');
    }
  }, [dispatch, course]);
 
  const renderStars = useMemo(() => (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= fullStars ? 'text-orange-400 fill-orange-400' : 
            i === fullStars + 1 && hasHalfStar ? 'text-orange-400 fill-orange-400' : 
            'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  }, []);

  useEffect(() => {
    if (isOpen && course) {
      addCourseToViewed(course.id);
    }
  }, [isOpen, course]);

  if (!course) {
    return null;
  }

  const categoryName = categories.find(cat => cat.id === course.category)?.name;
  const favorite = isFavorite(course.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-6xl p-0 bg-white border-0 shadow-2xl rounded-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
        <div className="md:hidden relative">
          <img
            src={course.thumbnailUrl}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {categoryName && (
            <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0 shadow-lg hover:bg-orange-600">
              <Tag className="w-3 h-3 mr-1" />
              {categoryName}
            </Badge>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl font-bold text-white mb-2 leading-tight">
              {course.title}
            </h2>
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 ring-2 ring-white/30">
                <AvatarImage src={course.instructor.avatarUrl} alt={course.instructor.name} />
                <AvatarFallback className="bg-orange-600 text-white font-bold">
                  {course.instructor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-white text-sm">{course.instructor.name}</p>
                <p className="text-xs text-orange-200">Expert in Web Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 lg:grid-cols-3">
          <div className="hidden md:block md:col-span-2 lg:col-span-1 relative">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {categoryName && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0 shadow-lg hover:bg-orange-600">
                <Tag className="w-3 h-3 mr-1" />
                {categoryName}
              </Badge>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-sm font-semibold text-white/90 flex items-center mb-3">
                <User className="w-4 h-4 mr-2" />
                Giảng viên
              </h3>
              
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 ring-2 ring-white/30">
                  <AvatarImage src={course.instructor.avatarUrl} alt={course.instructor.name} />
                  <AvatarFallback className="bg-orange-600 text-white font-bold">
                    {course.instructor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{course.instructor.name}</p>
                  <p className="text-sm text-orange-200">Expert in Web Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 flex flex-col p-6 lg:p-8">
            <div className="hidden md:block">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight mb-3">
                  {course.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-base leading-relaxed">
                  {course.description}
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="md:hidden mb-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-orange-600">{course.rating.toFixed(1)}</span>
                <div className="flex gap-1">{renderStars(course.rating)}</div>
              </div>
              <span className="text-sm text-gray-600">({course.reviewsCount.toLocaleString()})</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <Clock className="w-6 h-6 mx-auto text-orange-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">12h</p>
                <p className="text-xs text-gray-600">Thời lượng</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <Users className="w-6 h-6 mx-auto text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">1,234</p>
                <p className="text-xs text-gray-600">Học viên</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <Award className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Có</p>
                <p className="text-xs text-gray-600">Chứng chỉ</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg lg:text-xl font-bold mb-4 flex items-center text-gray-800">
                <CheckCircle2 className="w-6 h-6 mr-3 text-orange-600" />
                Bạn sẽ học được gì?
              </h3>
              <div className={`space-y-3 ${showAllLearning ? 'max-h-32 overflow-y-auto' : ''}`}>
                {course.whatYouWillLearn.slice(0, showAllLearning ? undefined : 3).map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-orange-500 flex-shrink-0 group-hover:text-orange-600 transition-colors" />
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
                {course.whatYouWillLearn.length > 3 && (
                  <button
                    onClick={() => setShowAllLearning(!showAllLearning)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium ml-8 transition-colors"
                  >
                    {showAllLearning ? 'Thu gọn' : `+${course.whatYouWillLearn.length - 3} mục khác...`}
                  </button>
                )}
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">
                    {formatPrice(course.price)}
                  </div>
                  <p className="text-sm text-gray-500">Học mãi mãi</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto justify-center items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleFavoriteClick} 
                    className={`!border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-all ${
                      favorite ? 'bg-orange-50 border-orange-400' : ''
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 p-6 sm:flex-none bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
                    onClick={handleAddToCart}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailModal;
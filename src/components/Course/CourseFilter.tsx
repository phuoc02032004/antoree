import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, DollarSign, SortAsc } from 'lucide-react';
import { type Category } from '@/types/Category';

interface CourseFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  priceFilter: string;
  setPriceFilter: (filter: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  activeFilter: string;
  handleFilterClick: (filter: string) => void;
  categories: Category[];
}

const CourseFilter: React.FC<CourseFilterProps> = ({
  searchTerm,
  setSearchTerm,
  priceFilter,
  setPriceFilter,
  sortOrder,
  setSortOrder,
  activeFilter,
  handleFilterClick,
  categories,
}) => {
  const filterButtons = ['View All', ...categories.map(category => category.name)];

  const priceRanges = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Dưới 500.000đ', value: 'under500k' },
    { label: '500.000đ - 1.000.000đ', value: '500kto1m' },
    { label: 'Trên 1.000.000đ', value: 'over1m' },
  ];

  const sortOptions = [
    { label: 'Mặc định', value: 'default' },
    { label: 'Thấp đến cao', value: 'price_asc' },
    { label: 'Cao đến thấp', value: 'price_desc' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      {/* Category Filter Buttons */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-[#FF6347]" />
          <h3 className="text-lg font-semibold text-gray-800">Danh mục khóa học</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {filterButtons.map((filter) => (
            <Button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium
                transition-all duration-300 ease-in-out transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-[#FF6347] focus:ring-offset-2
                ${activeFilter === filter
                  ? 'bg-[#FF6347] text-white shadow-lg shadow-[#FF6347]/30 border-2 border-[#FF6347]'
                  : 'border-2 border-gray-200 bg-white text-gray-700 hover:border-[#FF6347] hover:text-[#FF6347] hover:shadow-md'
                }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search Input - Takes more space */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-[#FF6347]" />
            <h4 className="text-md font-semibold text-gray-800">Tìm kiếm</h4>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Nhập tên khóa học..."
              className="pl-10 h-12 border-2 border-gray-200 rounded-lg focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
          <div className="min-w-[200px] space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#FF6347]" />
              <h4 className="text-md font-semibold text-gray-800">Mức giá</h4>
            </div>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="h-12 border-2 border-gray-200 rounded-lg focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300">
                <SelectValue placeholder="Chọn mức giá" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(({ label, value }) => (
                  <SelectItem 
                    key={value} 
                    value={value}
                    className="focus:bg-[#FF6347]/10 focus:text-[#FF6347]"
                  >
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Order */}
          <div className="min-w-[200px] space-y-3">
            <div className="flex items-center gap-2">
              <SortAsc className="h-5 w-5 text-[#FF6347]" />
              <h4 className="text-md font-semibold text-gray-800">Sắp xếp</h4>
            </div>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="h-12 border-2 border-gray-200 rounded-lg focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300">
                <SelectValue placeholder="Chọn thứ tự" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(({ label, value }) => (
                  <SelectItem 
                    key={value} 
                    value={value}
                    className="focus:bg-[#FF6347]/10 focus:text-[#FF6347]"
                  >
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Bộ lọc đang áp dụng:</span>
          <span className="bg-[#FF6347] text-white px-3 py-1 rounded-full text-xs font-medium">
            {activeFilter}
          </span>
          {priceFilter !== 'all' && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {priceRanges.find(p => p.value === priceFilter)?.label}
            </span>
          )}
          {sortOrder !== 'default' && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {sortOptions.find(s => s.value === sortOrder)?.label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
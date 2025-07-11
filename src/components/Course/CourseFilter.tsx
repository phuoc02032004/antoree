import React from 'react';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
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

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {filterButtons.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold
              transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF6347] focus:ring-offset-2
              ${activeFilter === filter
                ? 'bg-[#FF6347] text-white shadow-lg shadow-red-500/30'
                : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-100'
              }`}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            className="pl-10 h-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <RadioGroup
          value={priceFilter}
          onValueChange={setPriceFilter}
          className="flex flex-wrap gap-4"
        >
          {[
            { label: 'Tất cả', value: 'all' },
            { label: 'Dưới 500.000đ', value: 'under500k' },
            { label: '500.000đ - 1.000.000đ', value: '500kto1m' },
            { label: 'Trên 1.000.000đ', value: 'over1m' },
          ].map(({ label, value }) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value} className="text-sm font-medium">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

        <RadioGroup
          value={sortOrder}
          onValueChange={setSortOrder}
          className="flex flex-wrap gap-4"
        >
          <div className="text-sm font-semibold mr-2">Thứ tự giá:</div>
          {[
            { label: 'Mặc định', value: 'default' },
            { label: 'Thấp đến cao', value: 'price_asc' },
            { label: 'Cao đến thấp', value: 'price_desc' },
          ].map(({ label, value }) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={`sort-${value}`} />
              <Label htmlFor={`sort-${value}`} className="text-sm font-medium">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
    </div>
  );
};

export default CourseFilter;
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Search,
  Filter,
  DollarSign,
  SortAsc,
  X,
  RotateCcw,
  Sparkles
} from 'lucide-react';
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
  categories
}) => {
  const filterButtons = ['View All', ...categories.map(category => category.name)];

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under 500,000 VND', value: 'under500k' },
    { label: '500,000 - 1,000,000 VND', value: '500kto1m' },
    { label: 'Over 1,000,000 VND', value: 'over1m' }
  ];

  const sortOptions = [
    { label: 'Default Sort', value: 'default' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' }
  ];

  const handleClearAll = () => {
    setSearchTerm('');
    setPriceFilter('all');
    setSortOrder('default');
    handleFilterClick('View All');
  };

  const hasActiveFilters =
    searchTerm || priceFilter !== 'all' || sortOrder !== 'default' || activeFilter !== 'View All';

  return (
    <div className="relative bg-white/50 backdrop-blur-xl border border-gray-200/80 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl shadow-md">
              <Filter className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Course Filter</h3>
              <p className="text-sm text-gray-500 mt-1">Search and filter courses</p>
            </div>
          </div>

          <Button
            onClick={handleClearAll}
            disabled={!hasActiveFilters}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform
                       disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none
                       enabled:bg-gradient-to-r enabled:from-red-500 enabled:to-pink-500 enabled:text-white enabled:shadow-md enabled:hover:shadow-lg enabled:hover:scale-105"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Clear Filters</span>
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-orange-500" />
            <h4 className="text-base font-semibold text-gray-700">Categories</h4>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filterButtons.map((filter) => (
              <Button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                variant="outline"
                className={`rounded-full px-4 py-2 h-auto text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
                  ${activeFilter === filter
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-md hover:text-white'
                    : 'bg-white/60 border-gray-200 text-gray-700 hover:border-orange-400 hover:bg-orange-50/50 hover:text-orange-600'
                  }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1">
            <label htmlFor="search-input" className="flex items-center gap-2 mb-3 text-base font-semibold text-gray-700">
              <Search className="h-5 w-5 text-orange-500" />
              <span>Search</span>
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <Input
                id="search-input"
                type="text"
                placeholder="Enter course name, keywords..."
                className="w-full pl-12 pr-12 h-12 border-gray-200 rounded-lg bg-white/60 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-gray-200 hover:text-gray-800 rounded-md"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          <div className="w-full lg:w-64">
            <label htmlFor="price-filter" className="flex items-center gap-2 mb-3 text-base font-semibold text-gray-700">
              <DollarSign className="h-5 w-5 text-orange-500" />
              <span>Price Range</span>
            </label>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger id="price-filter" className="w-full h-12 border-gray-200 rounded-lg bg-white/60 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-200 shadow-lg bg-white">
                {priceRanges.map(({ label, value }) => (
                  <SelectItem key={value} value={value} className="focus:bg-orange-50 rounded-md m-1">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full lg:w-64">
            <label htmlFor="sort-order" className="flex items-center gap-2 mb-3 text-base font-semibold text-gray-700">
              <SortAsc className="h-5 w-5 text-orange-500" />
              <span>Sort</span>
            </label>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger id="sort-order" className="w-full h-12 border-gray-200 rounded-lg bg-white/60 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30">
                <SelectValue placeholder="Select order" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-200 shadow-lg bg-white">
                {sortOptions.map(({ label, value }) => (
                  <SelectItem key={value} value={value} className="focus:bg-orange-50 rounded-md m-1">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mt-8 pt-6 border-t border-gray-200/60">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-semibold text-gray-600 text-sm">Filtering by:</span>
              <div className="flex flex-wrap gap-2">
                {activeFilter !== 'View All' && (
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {activeFilter}
                    <button onClick={() => handleFilterClick('View All')} className="ml-1 p-0.5 rounded-full hover:bg-black/10">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
                {priceFilter !== 'all' && (
                  <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {priceRanges.find(p => p.value === priceFilter)?.label}
                    <button onClick={() => setPriceFilter('all')} className="ml-1 p-0.5 rounded-full hover:bg-black/10">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
                {sortOrder !== 'default' && (
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {sortOptions.find(s => s.value === sortOrder)?.label}
                    <button onClick={() => setSortOrder('default')} className="ml-1 p-0.5 rounded-full hover:bg-black/10">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
                {searchTerm && (
                  <div className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Keyword: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="ml-1 p-0.5 rounded-full hover:bg-black/10">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseFilter;

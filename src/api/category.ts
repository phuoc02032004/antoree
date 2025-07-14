import {categories} from "../data/categories";
import { type Category } from "../types/Category";

const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await categories
    return response
  } catch (err) {
    console.error('Error get category ...', err)
    throw err
  }
  
};

const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export { getCategories, getCategoryById };


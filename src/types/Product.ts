import { type Category } from "./Category";

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  category: Category;
}
export interface ProductResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}
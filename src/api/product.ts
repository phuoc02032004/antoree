import axiosClient from "./axiosClient";
import { type Product } from "../types/Product";
import { products } from "../data/products";

const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await new Promise<Product[]>((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        return response;
    } catch (error) {
        throw new Error("Failed to fetch products");
    }
}

export {getProducts}
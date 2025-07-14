import { useState, useEffect, useCallback } from 'react';

export const FAVORITES_KEY = 'favoriteCourses';
export const getFavoriteCourses = (): string[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteIds(getFavoriteCourses());
  }, []);

  const toggleFavorite = useCallback((courseId: string) => {
    setFavoriteIds(prevFavorites => {
      const newFavorites = prevFavorites.includes(courseId)
        ? prevFavorites.filter(id => id !== courseId)
        : [...prevFavorites, courseId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (courseId: string) => {
      return favoriteIds.includes(courseId);
    },
    [favoriteIds]
  );

  return { favoriteIds, toggleFavorite, isFavorite };
};


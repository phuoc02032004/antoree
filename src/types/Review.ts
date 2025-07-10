export interface IReview {
  id: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  rating: number; 
  comment: string;
  createdAt: string;
}
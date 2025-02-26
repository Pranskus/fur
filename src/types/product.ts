export interface Product {
  id: string;
  title: string;
  tag?: string;
  description: string[];
  images: string[];
  price?: number;
  cols?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

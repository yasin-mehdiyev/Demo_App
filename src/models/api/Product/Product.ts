export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;

  constructor(data: any) {
    this.id = data?.id || "";
    this.title = data?.title || "";
    this.description = data?.description || "";
    this.price = data?.price || 0;
    this.discountPercentage = data?.discountPercentage || 0;
    this.rating = data?.rating || 0;
    this.stock = data?.stock || 0;
    this.brand = data?.brand || "";
    this.category = data?.category || "";
    this.thumbnail = data?.thumbnail || "";
  }
}

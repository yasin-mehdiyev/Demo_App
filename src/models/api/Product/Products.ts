import { Product } from "./Product";

export class Products {
    limit: number;
    skip: number;
    products: Product[];
    total: number;
  
    constructor(data: any) {
      this.limit = data?.limit || 0;
      this.skip = data?.skip || 0;
      this.products = data?.products || [];
      this.total = data?.total || 0;
    }
  }
  
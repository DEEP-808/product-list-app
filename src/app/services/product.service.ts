import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, description: 'High-performance laptop' },
    { id: 2, name: 'Smartphone', price: 700, description: 'Latest model smartphone' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-canceling headphones' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
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
    { id: 1, name: 'Macbook Air', price: 999, description: 'Remarkably light and less than half an inch thin High-performance laptop' },
    { id: 2, name: 'Galaxy S25', price: 799, description: 'Latest galaxy smartphone with all new powerful processor & Galaxy AI' },
    { id: 3, name: 'Sony XM5', price: 400, description: 'Industry-leading Noise-canceling headphones, Magnificent Sound, engineered to perfection, Crystal clear hands-free calling' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  // Aplica el filtro de texto (búsqueda por nombre en este caso)
  applyTextFilter(data: Product[], searchText: string): Product[] {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // Aplica el filtro por rango de fechas
  applyDateFilter(data: Product[], startDate: Date, endDate: Date): Product[] {
    return data.filter(item =>
      item.date >= startDate && item.date <= endDate
    );
  }

  // Aplica el filtro por categoría
  applyCategoryFilter(data: Product[], category: string): Product[] {
    return data.filter(item => item.category === category);
  }
}

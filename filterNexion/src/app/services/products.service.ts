import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      name: 'leche',
      price: 100,
      category: 'lacteo',
      date: new Date('2024-01-01'),
    },
    {
      name: 'juguete 1',
      price: 150,
      category: 'jugueteria',
      date: new Date('2024-02-01'),
    },
    {
      name: 'juguete 2',
      price: 200,
      category: 'jugueteria',
      date: new Date('2024-03-01'),
    },
    {
      name: 'queso',
      price: 250,
      category: 'lacteo',
      date: new Date('2024-04-01'),
    },
    {
      name: 'juguete 3',
      price: 300,
      category: 'jugueteria',
      date: new Date('2024-05-01'),
    },
    {
      name: 'yogurth',
      price: 350,
      category: 'lacteo',
      date: new Date('2024-06-01'),
    },
  ];
  filtered = this.products;
   // Filtros y paginación
   currentPage: number = 1;
   pageSize: number = 2;
   totalPages: number = 0;
   filteredProducts: any[] = [];

  constructor() {}

  filterProducts(
    searchTerm: string | null,
    startDate: Date | null,
    endDate: Date | null,
    category: string | null
  ) {
    this.filtered = this.products;

    // Filtrar por término de búsqueda si existe
    if (searchTerm) {
      this.filtered = this.filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por categoría si existe
    if (category && category !== 'todos') {
      this.filtered = this.filtered.filter(
        (product) => product.category === category
      );
    }

    if (startDate && endDate) {

      this.filtered = this.filtered.filter((product) => {
        const productDate = new Date(product.date); // Convierte la fecha del producto

        // Normaliza la fecha a formato 'yyyy-MM-dd'
        const normalizedProductDate = productDate.toISOString().split('T')[0];
        const normalizedStartDate = startDate.toISOString().split('T')[0];
        const normalizedEndDate = endDate.toISOString().split('T')[0];

        // Compara sólo la parte de la fecha (sin horas)
        return normalizedProductDate >= normalizedStartDate && normalizedProductDate <= normalizedEndDate;
      });
    }
    this.filteredProducts = this.filtered;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    return this.getPaginatedProducts();
  }
  getPaginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    let x = this.filteredProducts.slice(startIndex, endIndex);
    return x;
  }

  // Funciones para cambiar de página
  nextPage(): any[] {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    return this.getPaginatedProducts();
  }

  previousPage(): any[] {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this.getPaginatedProducts();
  }

}

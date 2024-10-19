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

  /**
   * Filtra los productos basados en el término de búsqueda, fechas de inicio y fin, y categoría.
   *
   * @param searchTerm - Término de búsqueda que se utilizará para filtrar los productos por nombre.
   * @param startDate - Fecha de inicio para filtrar los productos.
   * @param endDate - Fecha de fin para filtrar los productos.
   * @param category - Categoría por la que se filtrarán los productos.
   * @returns Un arreglo de productos filtrados y paginados.
   */
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

    // Filtrar por fechas si ambas fechas están presentes
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

    // Actualiza el arreglo de productos filtrados y calcula el total de páginas
    this.filteredProducts = this.filtered;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    return this.getPaginatedProducts();
  }

  /**
   * Obtiene los productos paginados para la página actual.
   *
   * @returns Un arreglo de productos correspondientes a la página actual.
   */
  getPaginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  /**
   * Cambia a la siguiente página si es posible.
   *
   * @returns Un arreglo de productos para la nueva página actual.
   */
  nextPage(): any[] {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    return this.getPaginatedProducts();
  }

  /**
   * Cambia a la página anterior si es posible.
   *
   * @returns Un arreglo de productos para la nueva página actual.
   */
  previousPage(): any[] {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this.getPaginatedProducts();
  }
}

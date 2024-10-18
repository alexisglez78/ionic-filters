import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-filter',
  templateUrl: './reusable-filter.component.html',
  styleUrls: ['./reusable-filter.component.scss'],
})
export class ReusableFilterComponent {
  searchTerm: string = '';
  startDate: string | undefined;
  endDate: string | undefined;
  selectedCategory: string = 'todos';

  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 10; // Cambia este valor según tus necesidades
  totalItems: number = 100; // Cambia este valor a la cantidad total de elementos
  totalPages: number = Math.ceil(this.totalItems / this.itemsPerPage);

  onSearchChange() {
    // Lógica para manejar el cambio en la búsqueda
    console.log('Búsqueda:', this.searchTerm);
    this.currentPage = 1; // Reiniciar a la primera página al buscar
  }

  onDateChange() {
    // Lógica para manejar el cambio en las fechas
    console.log('Fecha desde:', this.startDate);
    console.log('Fecha hasta:', this.endDate);
    this.currentPage = 1; // Reiniciar a la primera página al cambiar fechas
  }

  onCategoryChange() {
    // Lógica para manejar el cambio en la categoría
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.currentPage = 1; // Reiniciar a la primera página al cambiar categoría
  }

  applyFilters() {
    // Lógica para aplicar los filtros seleccionados
    console.log('Filtros aplicados:', {
      searchTerm: this.searchTerm,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedCategory: this.selectedCategory,
    });

    // Aquí puedes realizar una llamada para obtener los datos filtrados y paginados.
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPageData(); // Cargar los datos de la página siguiente
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPageData(); // Cargar los datos de la página anterior
    }
  }

  loadPageData() {
    // Lógica para cargar los datos según la página actual
    console.log(`Cargando datos para la página ${this.currentPage}`);
    // Aquí puedes realizar la lógica para obtener los elementos de la página actual
  }
}

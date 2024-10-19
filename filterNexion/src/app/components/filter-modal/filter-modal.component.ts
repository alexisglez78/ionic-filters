// src/app/components/filter-modal/filter-modal.component.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LogsService } from 'src/app/services/logs.service';
import { ProductsService } from 'src/app/services/products.service';

/**
 * Componente para el modal de filtros, permitiendo a los usuarios aplicar filtros a los productos.
 */
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  /**
   * Término de búsqueda para filtrar productos.
   * @type {string}
   */
  searchTerm: string = '';

  /**
   * Fecha de inicio para el filtro.
   * @type {string | undefined}
   */
  startDate: string | undefined;

  /**
   * Fecha de fin para el filtro.
   * @type {string | undefined}
   */
  endDate: string | undefined;

  /**
   * Categoría seleccionada para filtrar productos.
   * @type {string}
   */
  selectedCategory: string = 'todos';

  /**
   * Productos filtrados después de aplicar los filtros.
   * @type {any}
   */
  filteredProducts: any;

  /**
   * Crea una instancia de FilterModalComponent.
   * @param modalCtrl - Controlador de modales para manejar la apertura y cierre del modal.
   * @param productService - Servicio para manejar la lógica de productos.
   * @param AuthService - Servicio de autenticación para obtener el token del usuario.
   * @param logService - Servicio para registrar los cambios de filtros aplicados.
   */
  constructor(
    private modalCtrl: ModalController,
    private productService: ProductsService,
    private AuthService: AuthService,
    private logService: LogsService
  ) {}

  /**
   * Maneja el cambio de fecha (sin implementación en este momento).
   */
  onDateChange() {
    // Implementar lógica para manejar el cambio de fecha si es necesario
  }

  /**
   * Maneja el cambio de categoría (sin implementación en este momento).
   */
  onCategoryChange() {
    // Implementar lógica para manejar el cambio de categoría si es necesario
  }

  /**
   * Aplica los filtros seleccionados y cierra el modal.
   */
  applyFilters() {
    const startDate = this.startDate ? new Date(this.startDate) : null;
    const endDate = this.endDate ? new Date(this.endDate) : null;

    // Llamar al servicio de productos con los filtros aplicados
    this.filteredProducts = this.productService.filterProducts(
      null,
      startDate,
      endDate,
      this.selectedCategory ? this.selectedCategory : null
    );

    // Registrar los filtros aplicados
    const appliedFilters = {
      searchTerm: this.searchTerm,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedCategory: this.selectedCategory,
      appliedAt: new Date(),
      tkn: this.AuthService.getToken()  // Datos del usuario (si aplican)
    };
    this.logService.addLog(appliedFilters);

    // Cerrar el modal después de aplicar los filtros
    this.modalCtrl.dismiss();
  }

  /**
   * Cierra el modal sin aplicar filtros.
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }
}

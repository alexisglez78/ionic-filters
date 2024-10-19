import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  searchTerm: string = '';
  startDate: string | undefined;
  endDate: string | undefined;
  selectedCategory: string = 'todos';
  filteredProducts:any;


  constructor(
    private modalCtrl: ModalController,
    private productService: ProductsService
  ) {}

  onDateChange() {
    // Lógica para manejar el cambio en las fechas
    console.log('Fecha desde:', this.startDate);
    console.log('Fecha hasta:', this.endDate);
  }

  onCategoryChange() {
    // Lógica para manejar el cambio en la categoría
    console.log('Categoría seleccionada:', this.selectedCategory);
  }

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

    // Cerrar el modal después de aplicar los filtros
    this.modalCtrl.dismiss();
  }



  closeModal() {
    this.modalCtrl.dismiss();
  }
}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LogsService } from 'src/app/services/logs.service';
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
    private productService: ProductsService,
    private AuthService: AuthService,
    private logService: LogsService
  ) {}

  onDateChange() {
  }

  onCategoryChange() {
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
    const appliedFilters = {
      searchTerm: this.searchTerm,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedCategory: this.selectedCategory,
      appliedAt: new Date(),
      tkn: this.AuthService.getToken()  // Datos del usuario (si aplican)
    };
    this.logService.addLog(appliedFilters);


    this.modalCtrl.dismiss();
  }



  closeModal() {
    this.modalCtrl.dismiss();
  }
}

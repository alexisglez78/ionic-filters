// src/app/pages/home/home.page.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from 'src/app/components/filter-modal/filter-modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { LogsService } from 'src/app/services/logs.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isDarkMode: boolean;
  currentPage: number = 1;
  totalPages: number = 0; // Cambia este valor según tus necesidades
  products: any[] | undefined;
  filteredProducts: any[] | undefined;
  searchTerm: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  selectedCategory: string | null = null;

  constructor(
    private modalController: ModalController,
    private productsService: ProductsService,
    public logService:LogsService,
    private AuthService:AuthService
  ) {
    // Inicializar el estado del tema según la preferencia almacenada
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }
  ngOnInit() {
    // Cargar los productos inicialmente
    this.loadProducts();
  }
  ngDoCheck() {
    if (this.filteredProducts !== this.productsService.filteredProducts) {
      this.products = this.productsService.getPaginatedProducts();
      this.totalPages = this.productsService.totalPages;
      this.currentPage = this.productsService.currentPage;
    }
  }

  onThemeToggle(event: any) {
    this.isDarkMode = event.detail.checked;
    this.toggleDarkTheme(this.isDarkMode);
  }

  toggleDarkTheme(isDark: boolean) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.filteredProducts = result.data;
      }
    });

    return await modal.present();
  }

  onSearchChange() {
    this.filteredProducts = this.productsService.filterProducts(
      this.searchTerm, // Solo para la búsqueda
      null, // No pasamos fechas aquí
      null,
      null
    );
    this.currentPage = 1;
    this.applyFilters();
  }
  loadProducts() {
    this.products = this.productsService.filterProducts(
      this.searchTerm,
      this.startDate,
      this.endDate,
      this.selectedCategory
    );
    this.totalPages = this.productsService.totalPages;
    this.currentPage = this.productsService.currentPage;

    const appliedFilters = {
      searchTerm: this.searchTerm,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedCategory: this.selectedCategory,
      appliedAt: new Date(),
      tkn: this.AuthService.getToken()  // Datos del usuario (si aplican)
    };
    this.logService.addLog(appliedFilters);
  }

  // Aplicar filtros
  applyFilters() {
    this.loadProducts();
  }

  // Funciones de paginación
  nextPage() {
    this.products = this.productsService.nextPage();
    this.currentPage = this.productsService.currentPage;
  }

  previousPage() {
    this.products = this.productsService.previousPage();
    this.currentPage = this.productsService.currentPage;
  }
  deletefilter() {
    this.searchTerm = '';
    this.startDate = null;
    this.endDate = null;
    this.selectedCategory = 'todos';

    this.applyFilters();
  }
}

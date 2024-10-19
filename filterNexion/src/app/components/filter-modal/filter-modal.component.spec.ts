import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterModalComponent } from './filter-modal.component'; // Ajusta la ruta según sea necesario
import { AuthService } from 'src/app/services/auth.service'; // Ajusta la ruta si es necesario
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ModalController } from '@ionic/angular'; // Importa ModalController si es necesario
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('FilterModalComponent', () => {
  let component: FilterModalComponent;
  let fixture: ComponentFixture<FilterModalComponent>;

  // Mock para AuthService
  const authServiceMock = {
    login: jasmine.createSpy('login').and.returnValue(of(true)),
    logout: jasmine.createSpy('logout').and.returnValue(of(true)),
    isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(true),
    getToken: jasmine.createSpy('getToken').and.returnValue('mocked_token'),
  };

  // Mock para ModalController
  const modalControllerMock = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present').and.returnValue(Promise.resolve()),
      dismiss: jasmine.createSpy('dismiss'),
    })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterModalComponent],
      imports: [HttpClientModule], // Asegúrate de importar HttpClientModule
      providers: [
        { provide: AuthService, useValue: authServiceMock }, // Proveer el mock de AuthService
        { provide: ModalController, useValue: modalControllerMock }, // Proveer el mock de ModalController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añadir si hay elementos personalizados
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Aquí puedes agregar más pruebas según sea necesario
});

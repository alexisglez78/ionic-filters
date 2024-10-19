import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de incluir esto
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { FilterModalComponent } from 'src/app/components/filter-modal/filter-modal.component';

describe('HomePage', () => {
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

});

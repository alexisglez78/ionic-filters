import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Mock para AuthService
  const authServiceMock = {
    login: jasmine.createSpy('login').and.returnValue(of({ token: 'mocked_token' })),
    saveToken: jasmine.createSpy('saveToken'),
  };

  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule
        IonicModule.forRoot(), // Asegúrate de importar IonicModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method and navigate on success', () => {
    component.formData.controls['email'].setValue('test@domain.com');
    component.formData.controls['password'].setValue('password123');
    component.login();
    expect(authServiceMock.login).toHaveBeenCalled();
    expect(authServiceMock.saveToken).toHaveBeenCalledWith('mocked_token');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/home']);
  });
});

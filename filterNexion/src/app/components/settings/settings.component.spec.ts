import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { AppComponent } from 'src/app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  // Mock AppComponent
  const appComponentMock = {
    switchTheme: jasmine.createSpy('switchTheme'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: AppComponent, useValue: appComponentMock }, // Provide the mock
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregar CUSTOM_ELEMENTS_SCHEMA aquí
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme', () => {
    component.onThemeToggle({ detail: { checked: true } });
    expect(component.isDarkMode).toBe(true);
    expect(appComponentMock.switchTheme).toHaveBeenCalledWith(true);
  });
});

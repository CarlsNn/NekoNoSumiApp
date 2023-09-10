import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginangularPage } from './loginangular.page';

describe('LoginangularPage', () => {
  let component: LoginangularPage;
  let fixture: ComponentFixture<LoginangularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginangularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

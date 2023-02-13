import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEcommerceComponent } from './header-ecommerce.component';

describe('HeaderEcommerceComponent', () => {
  let component: HeaderEcommerceComponent;
  let fixture: ComponentFixture<HeaderEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

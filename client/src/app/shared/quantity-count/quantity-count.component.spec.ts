import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCountComponent } from './quantity-count.component';

describe('QuantityCountComponent', () => {
  let component: QuantityCountComponent;
  let fixture: ComponentFixture<QuantityCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantityCountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendaComponent } from './prenda.component';

describe('PrendaComponent', () => {
  let component: PrendaComponent;
  let fixture: ComponentFixture<PrendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrendaComponent]
    });
    fixture = TestBed.createComponent(PrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

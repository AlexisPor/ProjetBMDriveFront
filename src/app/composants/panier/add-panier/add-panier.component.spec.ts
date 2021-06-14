import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPanierComponent } from './add-panier.component';

describe('AddPanierComponent', () => {
  let component: AddPanierComponent;
  let fixture: ComponentFixture<AddPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

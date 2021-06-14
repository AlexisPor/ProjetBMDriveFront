import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanierComponent } from './update-panier.component';

describe('UpdatePanierComponent', () => {
  let component: UpdatePanierComponent;
  let fixture: ComponentFixture<UpdatePanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

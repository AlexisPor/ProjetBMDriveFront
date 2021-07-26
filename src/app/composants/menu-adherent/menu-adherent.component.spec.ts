import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdherentComponent } from './menu-adherent.component';

describe('MenuAdherentComponent', () => {
  let component: MenuAdherentComponent;
  let fixture: ComponentFixture<MenuAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

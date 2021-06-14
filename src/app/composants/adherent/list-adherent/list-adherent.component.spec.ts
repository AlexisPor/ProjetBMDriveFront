import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdherentComponent } from './list-adherent.component';

describe('ListAdherentComponent', () => {
  let component: ListAdherentComponent;
  let fixture: ComponentFixture<ListAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

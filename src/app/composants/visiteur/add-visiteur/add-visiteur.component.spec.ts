import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisiteurComponent } from './add-visiteur.component';

describe('AddVisiteurComponent', () => {
  let component: AddVisiteurComponent;
  let fixture: ComponentFixture<AddVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

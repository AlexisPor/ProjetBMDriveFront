import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisiteurComponent } from './list-visiteur.component';

describe('ListVisiteurComponent', () => {
  let component: ListVisiteurComponent;
  let fixture: ComponentFixture<ListVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

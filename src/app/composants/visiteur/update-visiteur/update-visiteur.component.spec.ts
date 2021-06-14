import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisiteurComponent } from './update-visiteur.component';

describe('UpdateVisiteurComponent', () => {
  let component: UpdateVisiteurComponent;
  let fixture: ComponentFixture<UpdateVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

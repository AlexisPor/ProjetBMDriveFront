import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasierComponent } from './list-casier.component';

describe('ListCasierComponent', () => {
  let component: ListCasierComponent;
  let fixture: ComponentFixture<ListCasierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCasierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

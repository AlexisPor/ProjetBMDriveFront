import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdentiteComponent } from './list-identite.component';

describe('ListIdentiteComponent', () => {
  let component: ListIdentiteComponent;
  let fixture: ComponentFixture<ListIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIdentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

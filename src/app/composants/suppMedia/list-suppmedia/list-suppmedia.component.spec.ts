import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuppmediaComponent } from './list-suppmedia.component';

describe('ListSuppmediaComponent', () => {
  let component: ListSuppmediaComponent;
  let fixture: ComponentFixture<ListSuppmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSuppmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuppmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

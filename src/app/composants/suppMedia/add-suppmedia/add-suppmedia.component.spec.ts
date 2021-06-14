import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuppmediaComponent } from './add-suppmedia.component';

describe('AddSuppmediaComponent', () => {
  let component: AddSuppmediaComponent;
  let fixture: ComponentFixture<AddSuppmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuppmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuppmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdentiteComponent } from './add-identite.component';

describe('AddIdentiteComponent', () => {
  let component: AddIdentiteComponent;
  let fixture: ComponentFixture<AddIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIdentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

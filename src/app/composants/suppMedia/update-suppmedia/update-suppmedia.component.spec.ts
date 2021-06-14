import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuppmediaComponent } from './update-suppmedia.component';

describe('UpdateSuppmediaComponent', () => {
  let component: UpdateSuppmediaComponent;
  let fixture: ComponentFixture<UpdateSuppmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuppmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuppmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

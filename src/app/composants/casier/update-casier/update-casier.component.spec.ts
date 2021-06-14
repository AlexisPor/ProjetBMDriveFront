import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCasierComponent } from './update-casier.component';

describe('UpdateCasierComponent', () => {
  let component: UpdateCasierComponent;
  let fixture: ComponentFixture<UpdateCasierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCasierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

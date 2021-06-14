import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdentiteComponent } from './update-identite.component';

describe('UpdateIdentiteComponent', () => {
  let component: UpdateIdentiteComponent;
  let fixture: ComponentFixture<UpdateIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIdentiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgentbmComponent } from './add-agentbm.component';

describe('AddAgentbmComponent', () => {
  let component: AddAgentbmComponent;
  let fixture: ComponentFixture<AddAgentbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgentbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgentbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgentbmComponent } from './update-agentbm.component';

describe('UpdateAgentbmComponent', () => {
  let component: UpdateAgentbmComponent;
  let fixture: ComponentFixture<UpdateAgentbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgentbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgentbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

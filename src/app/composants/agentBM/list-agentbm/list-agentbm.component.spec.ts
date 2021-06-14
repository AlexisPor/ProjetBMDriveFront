import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgentbmComponent } from './list-agentbm.component';

describe('ListAgentbmComponent', () => {
  let component: ListAgentbmComponent;
  let fixture: ComponentFixture<ListAgentbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgentbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgentbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

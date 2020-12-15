import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscoverComponent } from './admin-discover.component';

describe('AdminDiscoverComponent', () => {
  let component: AdminDiscoverComponent;
  let fixture: ComponentFixture<AdminDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

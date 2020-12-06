import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerinfoComponent } from './travelerinfo.component';

describe('TravelerinfoComponent', () => {
  let component: TravelerinfoComponent;
  let fixture: ComponentFixture<TravelerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelerinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

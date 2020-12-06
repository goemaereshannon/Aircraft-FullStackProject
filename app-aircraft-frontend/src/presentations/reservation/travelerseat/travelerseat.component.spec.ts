import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerseatComponent } from './travelerseat.component';

describe('TravelerseatComponent', () => {
  let component: TravelerseatComponent;
  let fixture: ComponentFixture<TravelerseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelerseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { switchLanguageComponent } from './switch-language.component';

describe('switchLanguageComponent', () => {
  let component: switchLanguageComponent;
  let fixture: ComponentFixture<switchLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ switchLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(switchLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLanguageComponent } from './switch-language.component';

describe('switchLanguageComponent', () => {
  let component: SwitchLanguageComponent;
  let fixture: ComponentFixture<SwitchLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchLanguageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

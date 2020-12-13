import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  RouterTestingModule,
  setupTestingRouter,
} from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let button: any;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [PageNotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a test title', () => {
    expect(component.title).toEqual('Test PageNotFound');
  });

  describe('when button is clicked', () => {
    beforeEach(() => {
      button = fixture.debugElement.nativeElement.querySelector('.test-button');
    });

    it('should react on button click', () => {
      spyOn(component, 'bringBackToRoute');
      button.click();

      fixture.whenStable().then(() => {
        expect(component.bringBackToRoute).toHaveBeenCalled();
      });
    });
  });

  it('should navigate when calling function after click', () => {
    component.bringBackToRoute();
    fixture.whenStable().then(() => {
      expect(router.navigated).toBeTrue;
    });
    // it('should react on button click', () => {
    //   spyOn(component, 'bringBackToRoute');
    //   button.click();

    //   fixture.whenStable().then(() => {
    //     expect(component.bringBackToRoute).toHaveBeenCalled();
    //   });
    // });
  });
});

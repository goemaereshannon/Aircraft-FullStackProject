import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { DiscoverComponent } from './discover.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;
  let button: any;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [DiscoverComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(routes);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when find flights button is clicked', () => {
    beforeEach(() => {
      button = fixture.debugElement.nativeElement.querySelector('.test-button');
    });

    it('should navigate on button click', () => {
      spyOn(component, 'searchForm');
      button.click();
      fixture.whenStable().then(() => {
        expect(router.navigateByUrl('/flight/availableflights'));
      });
    });
  });
});

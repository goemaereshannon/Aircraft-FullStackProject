import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  bringBackToRoute(): void {
    this.router.navigate(['/flight/discover']);
  }
}

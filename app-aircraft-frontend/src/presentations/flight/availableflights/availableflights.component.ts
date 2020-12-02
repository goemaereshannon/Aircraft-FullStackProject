import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.scss']
})
export class AvailableflightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.data)
  }

}

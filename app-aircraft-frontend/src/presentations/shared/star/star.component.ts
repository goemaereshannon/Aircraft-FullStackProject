import {
  Component,
  OnChanges,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number;

  onInit(): void {
    console.log({ rating: this.rating });
  }

  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating,
    });
    console.log({ rating: this.rating });
  }
}

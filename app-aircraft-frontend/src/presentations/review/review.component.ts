import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ReviewService } from '../../services/review.service';
import { User } from '../identity/user';
import { Flight } from 'presentations/flight/flight';
import { Author, Review, ReviewedFlight } from './Review';
import { FlightService } from 'services/flight.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviewForm: FormGroup;
  flightId: string = 'd470123f-7795-4158-aa2b-9088e29de88d';
  user: User;
  subjects: string[];
  flight: Flight;
  reviewedFlight: ReviewedFlight;
  review: Review;
  author: Author;
  starRating: number;
  subjectControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private reviewService: ReviewService,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      subject: ['', Validators.required],
      description: ['', [Validators.maxLength(250)]],
      rating: [0, [Validators.max(5), Validators.min(0)]],
    });
    this.getsubjects();
    this.getFlight();
    this.starRating = 0;
    console.log(this.userService.loggedInUser);
  }

  getsubjects(): void {
    this.reviewService.getSubjects().subscribe({
      next: (data) => (this.subjects = data.result),
      error: (err) => {
        console.log(err);
      },
    });
  }
  getFlight(): void {
    this.flightService.getFlightDetails(this.flightId).subscribe({
      next: (data) => this.makeFlight(data),
      error: (err) => {
        console.log({ err });
      },
    });
  }
  makeFlight(flight: Flight): void {
    this.reviewedFlight = {} as ReviewedFlight;
    this.reviewedFlight.flightId = flight.id;
    this.reviewedFlight.timeOfArrival = flight.timeOfArrival;
    this.reviewedFlight.timeOfDeparture = flight.timeOfDeparture;
    this.reviewedFlight.departureAirport =
      flight.departureDTO.locationDTO.airport;
    this.reviewedFlight.destinationAirport =
      flight.destinationDTO.locationDTO.airport;
  }
  makeAuthor(user: User): void {
    this.author = {} as Author;
    this.author.firstName = user.firstName;
    this.author.lastName = user.lastName;
    this.author.userId = this.userService.UserId;
  }
  onRatingClicked(event: Event): void {
    this.starRating = event['rating'];
    console.log({ starRating: this.starRating });
  }
  postReview(): void {
    this.makeAuthor(this.userService.loggedInUser);
    if (this.reviewForm.valid) {
      if (this.reviewForm.dirty) {
        this.review = {} as Review;
        this.review.subject = this.reviewForm.get('subject').value;
        this.review.comment = this.reviewForm.get('description').value;
        this.review.flightId = this.flightId;
        this.review.flight = this.reviewedFlight;
        this.review.author = this.author;
        this.review.userId = this.author.userId.toString();
        console.log({ reviewToBePosted: this.review });
        this.review.rating = this.reviewForm.get('rating').value;
        this.reviewService.postReview(this.review).subscribe({
          next: (data) => console.log({ postedreview: data }),
          error: (err) => {
            console.log({ err });
          },
        });
      }
    }
  }
}

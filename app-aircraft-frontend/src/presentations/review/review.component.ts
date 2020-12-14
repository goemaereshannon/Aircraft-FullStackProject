import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ReviewService } from '../../services/review.service';
import { User } from '../identity/user';
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      subject: this.fb.array([]),
      description: ['', [Validators.maxLength(250)]],
    });
    this.getsubjects();
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
  postReview(): void {}
}

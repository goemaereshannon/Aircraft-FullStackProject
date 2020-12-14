import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concat, Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Review } from 'presentations/review/Review';
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  review: Review;

  ngOnInit(): void {}

  //   registerUser(user: User): Observable<any> {
  //     console.log('register in backend');
  //     console.log(JSON.stringify(user));
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //     return this.http
  //       .post<User>(
  //         'http://localhost:32820/identity/auth/register',
  //         JSON.stringify(user),
  //         { headers }
  //       )
  //       .pipe(
  //         tap((data) => console.log('registerUser: ' + JSON.stringify(data))),
  //         catchError(this.handleError)
  //       );
  //   }
  //   loginUser(loginData: LoginData): Observable<any> {
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //     return this.http
  //       .post<User>(
  //         'http://localhost:32820/identity/auth/login',
  //         JSON.stringify(loginData),
  //         { headers }
  //       )
  //       .pipe(
  //         tap((data) => console.log('loginUser: ' + JSON.stringify(data))),
  //         catchError(this.handleError)
  //       );
  //   }

  //   logoutUser(): void {
  //     localStorage.removeItem('token');
  //     console.log({ tokenremoved: localStorage.getItem('token') });
  //     this.isLoggedIn = false;
  //   }

  getSubjects(): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //  console.log(this.UserId);
    return this.http
      .get<any>(
        `http://localhost:32820/review/reviews/subjects`

        // { headers }
      )
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(err): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.log('handleError');
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('elsie');
      // console.log(err)
      // console.log({status: err.status})
      // console.log({error: err.error})
      errorMessage = `${err.error}`;
      console.log({ errorMessage });
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

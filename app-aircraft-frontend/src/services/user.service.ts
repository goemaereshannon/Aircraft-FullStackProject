import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, LoginData } from '../presentations/identity/user';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    console.log({ token });
    console.log(this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }
  registerUser(user: User): Observable<any> {
    console.log('register in backend');
    console.log(JSON.stringify(user));
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<User>(
        'http://localhost:32820/identity/auth/register',
        JSON.stringify(user),
        { headers }
      )
      .pipe(
        tap((data) => console.log('registerUser: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  loginUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<User>(
        'http://localhost:32820/identity/auth/login',
        JSON.stringify(loginData),
        { headers }
      )
      .pipe(
        tap((data) => console.log('loginUser: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  logoutUser(): void {
    localStorage.removeItem('token');
  }

  parseJwt = (token: string): Object => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  };
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

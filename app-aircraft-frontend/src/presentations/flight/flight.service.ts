import {Injectable} from '@angular/core'; 
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'; 
import { Flight } from './flight';

 @Injectable({
     providedIn: 'root'
 })
 export class FlightService{
     constructor(private http: HttpClient){}
     private extractData(res:Response){
         let body = res; 
         console.log("RESPONSE")
         console.log(body); 
         return body || {}; 
     }
    public getTodaysFlights(): Observable<any>{
        console.log("Get todays flights"); 
         return this.http.get<Flight[]>("http://localhost:44347/api/flightstoday")
         .pipe(
             tap(data=> console.log('getflights: ' + JSON.stringify(data))),
             catchError(this.handleError)
         ); 
     }

     private handleError(err: HttpErrorResponse){
         console.log('Handling error');
         let errorMessage : string;
         if(err.error instanceof ErrorEvent){
             errorMessage = `An error occured: ${err.error.message}`;
         } else{
             errorMessage = `${err.error}`;
         }
         return throwError(errorMessage); 
     }

 }
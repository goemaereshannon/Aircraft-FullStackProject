import {Injectable} from '@angular/core'; 
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators'; 

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
         return this.http.get("http://localhost:5001/api/todaysflights")
         .pipe(
             map(this.extractData), 
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
import {Injectable} from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'; 

 @Injectable({
     providedIn: 'root'
 })
 export class FlightService{
     constructor(private http: HttpClient){}
         getTodaysFlights(): Observable<any[]>{
         return this.http.get<any[]>("http://localhost:5001/api/todaysflights")
         .pipe(
             tap(data => console.log(JSON.stringify(data))), 
             catchError(this.handleError)
         )
     }

     private handleError(err): Observable<never>{
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
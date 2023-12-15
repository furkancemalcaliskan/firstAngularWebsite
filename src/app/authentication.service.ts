import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'api/users';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  // login(data: any): Observable<User> {
  //   this.http.post(url, data)
  // }

  signUp(data: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/SignUp/`, data)
    .pipe(
      tap((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(`added user w/ id=${user.id}`);
      }),
      catchError(this.handleError<User>('signUp'))
    );
  }

  login(data: any): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/Login`, data)
    .pipe(
      tap((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(`logged user w/ id=${user.id}`);
      }),
      catchError(this.handleError<User>('login'))
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EMPTY_USER, IUser } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUser = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  loadCurrentUser(token: string | null) {
    if (!token) {
      this.currentUser.next(EMPTY_USER);
      return of();
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http
      .get<IUser>(`${this.baseUrl}/account`, { headers })
      .pipe(
        map((user) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUser.next(user);
          }
        })
      );
  }

  login(values: any) {
    return this.http.post<IUser>(`${this.baseUrl}/account/login`, values).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.next(user);
        }
      })
    );
  }

  register(values: any) {
    return this.http.post<IUser>(`${this.baseUrl}/account/register`, values).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.next(EMPTY_USER);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get<boolean>(`${this.baseUrl}/account/emailexists?email=${email}`);
  }
}

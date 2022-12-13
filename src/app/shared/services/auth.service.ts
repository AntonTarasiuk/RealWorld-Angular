import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../types';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public errorMessages: string[] = []
  public user!: User

  constructor(private httpClient: HttpClient, private router: Router) { }

  public register(registerBody: any): void {

    this.errorMessages = [];
    this.httpClient.post<{user: User}>(`${environment.apiUrl}/users`, {
      ...registerBody
    }).subscribe({
      next: res => {
        this.user = res.user;
        this.router.navigateByUrl('/home');
      },
      error: (err: HttpErrorResponse) => {
        for (const message in err.error.errors) {
          this.errorMessages.push(`${message} ${err.error.errors[message]}`)
        }
      }
    })
  }

  public login(loginBody: any) {
    this.errorMessages = [];
    this.httpClient.post<{user: User}>(`${environment.apiUrl}/users/login`, {
      ...loginBody
    }).subscribe({
      next: res => {
        this.user = res.user;
        this.router.navigateByUrl('/home')
      },
      error: (err: HttpErrorResponse) => {
        for (const message in err.error.errors) {
          this.errorMessages.push(`${message} ${err.error.errors[message]}`)
        }
      }
    })
  }

  public getUser(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.token}`
    })
    return this.httpClient.get(`${environment.apiUrl}/user`, {headers})
  }
  
}

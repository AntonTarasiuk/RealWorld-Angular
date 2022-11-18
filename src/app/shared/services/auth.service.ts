import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = "https://api.realworld.io/api";
  public errorMessages: string[] = []
  public user!: User

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  public regitre(registerBody: any): void {
    this.errorMessages = [];
    this.httpClient.post<{user: User}>(`${this.apiUrl}/users`, {
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
    this.httpClient.post<{user: User}>(`${this.apiUrl}/users/login`, {
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

  public getUser(): any {
    console.log(this.user.token)
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.token}`
    })
    this.httpClient.get(`${this.apiUrl}/user`, {headers}).subscribe(
      res => console.log(res)
    )
  }

  public updateUser(updateBody: any): any {
    this.httpClient.put(`${this.apiUrl}/user`, {
      ...updateBody
    })
  }
}

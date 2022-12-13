import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const userBody = {
    bio: "test",
    email: "test",
    image: "test",
    token: "test",
    username: "test",
  }

  const registerBody = {
    username: 'test',
    email: 'test',
    password: 'test'
  }

  const loginBody = {
    email: 'test',
    password: 'test'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: {
          get: () => of({user: userBody}),
          post: () => of({user: userBody})
        }},
        {provide: Router, useValue: {
          navigateByUrl: () => true
        }}
      ]
    });
    service = TestBed.inject(AuthService);
    service.user = userBody
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register new user', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'post').and.callThrough();
    service.register({ registerBody: registerBody });
    expect(spy).toHaveBeenCalledWith('https://api.realworld.io/api/users', {registerBody});
    expect(service.user).toEqual(userBody)
  }));

  it('should login user', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'post').and.callThrough();
    service.login({ loginBody: loginBody });
    expect(spy).toHaveBeenCalledWith('https://api.realworld.io/api/users/login', {loginBody});
    expect(service.user).toEqual(userBody)
  }));

  it('should get User', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.callThrough();
    const result = service.getUser();
    expect(spy).toHaveBeenCalled();
    result.subscribe(res => expect(res).toEqual({user: userBody}))
  }));

});

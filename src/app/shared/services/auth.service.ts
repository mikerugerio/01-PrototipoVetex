// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'oO5OgF2ku1IYvGwylDGG4jLUNHddhTtD',
    domain: 'pvo.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pvo.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/full-layout',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
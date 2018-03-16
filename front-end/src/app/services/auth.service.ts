import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/app-register', user, {headers: headers})
      .map(res => res.json ());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/app-login', user, {headers: headers})
      .map(res => res.json ());
  }

  getProfile() {
    const headers = new Headers();
    headers.append('Authorization', 'this.authToken');
    return this.http.post('http://localhost:3000/api/app-profile', {headers: headers})
      .map(res => res.json ());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

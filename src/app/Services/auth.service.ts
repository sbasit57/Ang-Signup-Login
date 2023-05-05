import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseurl: string = "https://localhost:7121/api/User/"
  constructor(private http : HttpClient) { }

  signUp(signObj: any){
    return this.http.post<any>('${this.baseurl}register',signObj);
  }

  login(loginObj:any){
    return this.http.post<any>('${this.baseurl}authenticate',loginObj);
  }

}

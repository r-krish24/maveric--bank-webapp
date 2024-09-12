import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authrequest } from '../models/authrequest';
import { Authresponse } from '../models/authresponse';
import { User } from '../models/user';
import { Urls } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }
  
  public getJwtToken(authrequest:Authrequest):Observable<Authresponse>
  {
    console.log("Checking inside service");
    return this.http.post<Authresponse>(`${Urls.signinUrl}/login`,authrequest);  
  }
  public createUser(user: User):Observable<Object>{
    return this.http.post(`${Urls.signinUrl}/signup`,user);
  }
  public helloMaveric()
  {
    let tokenStr = sessionStorage.getItem('token');
    if(tokenStr==null)
      tokenStr='';
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:3000/api/v1/hello",{headers,responseType:'text' as 'json'});
  } 

  isLoggedin() 
  { 
    return sessionStorage.getItem('token')!=null||sessionStorage.getItem('token')!="";
   }

}

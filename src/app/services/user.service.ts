import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Urls } from '../urls';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  getuserlist():Observable<User[]>{
    return this.httpClient.get<User[]>(`${Urls.userUrl}`);
  }

  createUser(user: User):Observable<Object>{
    return this.httpClient.post(`${Urls.signinUrl}/signup`,user);
  }
  getUserById(_id:String):Observable<User>{
    return this.httpClient.get<User>(`${Urls.userUrl}/${_id}`);
  }
  updateUser(_id:String,user:User):Observable<Object>{
    return this.httpClient.put(`${Urls.userUrl}/${_id}`,user);
  }
  deleteUser(_id:String):Observable<Object>{
    return this.httpClient.delete(`${Urls.userUrl}/${_id}`);
  }
}

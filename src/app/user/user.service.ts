import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { User } from './user.class';
import { JsonResponse } from '../util/json-response.class';

const url= 'http://localhost:8080/Users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login(UserName: string, Password: string): Observable<JsonResponse> {
    return this.http.get(`${url}Login/${UserName}/${Password}`) as Observable<JsonResponse>;
  }

list(): Observable<JsonResponse> {
  return this.http.get(url + 'List') as Observable<JsonResponse>;
}
get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}
add(user: User): Observable<JsonResponse> {
  return this.http.post(url + "Add", user) as Observable<JsonResponse>;
}
change(user: User): Observable<JsonResponse> {
  return   this.http.post(url + "Change", user) as Observable<JsonResponse>;
}
remove(user: User): Observable<JsonResponse> {
  return this.http.post(url + "Remove", user) as Observable<JsonResponse>;
}

  constructor(private http: HttpClient, private sys: SystemService) { }
}

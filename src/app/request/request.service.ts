import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { Request } from './request.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable({
    providedIn: 'root'
  })
  export class RequestService {
  
    review(id): Observable<JsonResponse> {
      return this.http.get(url + 'Review/' + id) as Observable<JsonResponse>;
    }
    reviews(userid): Observable<JsonResponse> {
      return this.http.get(url + "Reviewlist/" + userid) as Observable<JsonResponse>;
    }
    list(): Observable<JsonResponse> {
      return this.http.get(url + "List") as Observable<JsonResponse>;
    }
    get(id): Observable<JsonResponse> {
      return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
    }
    create(request: Request): Observable<JsonResponse> {
      return this.http.post(url + "Create", request) as Observable<JsonResponse>;
    }
    change(request: Request): Observable<JsonResponse> {
      return this.http.post(url + "Change", request) as Observable<JsonResponse>;
    }
    remove(request: Request): Observable<JsonResponse> {
      return this.http.post(url + "Remove", request) as Observable<JsonResponse>;
    }
  
    constructor(private http: HttpClient,  private sys: SystemService,) { }
  }
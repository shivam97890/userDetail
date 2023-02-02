import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(public https: HttpClient) { }

  getData(): any {
    return this.https.get<any>(environment.url);
  }

  getUserPaticularDetails(id:string):any {
    const url=`${environment.url}/${id}`;
    return this.https.get<any>(url);
  }

}

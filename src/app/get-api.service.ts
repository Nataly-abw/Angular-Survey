import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  callApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}

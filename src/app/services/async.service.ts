import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor(private readonly httpClient: HttpClient) { }
  isConnected() {
    return new Date().getTime() % 2 == 0 ;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor(private readonly httpClient: HttpClient) { }
  isConnected() {
    return new Date().getTime() % 2 == 0 ;
  }

  getPokemon$(id: number): Observable<Pokemon>
  {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/berry/${id}`)
  }
}
type Pokemon = {id: number, name: string}

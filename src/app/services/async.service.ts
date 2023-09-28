import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncService {
  constructor(private readonly httpClient: HttpClient) {}

  isConnected() {
    return new Date().getTime() % 2 == 0;
  }

  getPokemon$(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      `https://pokeapi.co/api/v2/berry/${id}`,
    );
  }

  getPokemons$(sort: 'asc' | 'desc'): Observable<Pokemon[]> {
    const params = new HttpParams().set('sort', sort);
    return this.httpClient.get<Pokemon[]>(`https://pokeapi.co/api/v2/berry`, {
      params,
    });
  }

  getFilePath$(id: string) {
    return of(`tmp/${id}`).pipe(delay(500));
  }
}

type Pokemon = { id: number; name: string };

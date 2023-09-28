import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {AsyncService} from './async.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('AsyncService', () => {
  let service: AsyncService, httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AsyncService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // todo fix it
  it('should get a pokemon', () => {
    const pokemonId = 1;

    service.getPokemon$(pokemonId)
      .subscribe(({id, name}) => {
        expect(id).toBe(pokemonId);
        expect(name).toEqual('hans')
      })

    httpController.expectOne({url: `https://pokeapi.co/api/v2/berry/1`, method: 'GET'})
      .flush({id: pokemonId, name: 'hans'})

  });

  afterEach(() => httpController.verify())

});

import {
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';

import { AsyncService } from './async.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

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
  // it('should get a pokemon', () => {
  //   const pokemonId = 1;
  //
  //   service.getPokemon$(pokemonId)
  //     .subscribe(({id, name}) => {
  //       expect(id).toBe(pokemonId);
  //       expect(name).toEqual('hans')
  //     })
  //
  //   const req = httpController.expectOne({url: `https://pokeapi.co/api/v2/berry/1`, method: 'GET'});
  // });

  // todo fix it
  // it('should get a pokemon list with asc sorting', () => {
  //
  //   service.getPokemons$('asc')
  //     .subscribe((data) => expect(data).toBeTruthy() );
  //
  //   const req = httpController.expectOne(req => req.url === 'https://pokeapi.co/api/v2/berry?sort=asc');
  //   expect(req.request.method).toEqual('GET')
  //   expect(req.request.params.get('sort')).toEqual('asc')
  //   req.flush([])
  //
  // });

  it('should get a path A', (done) => {
    const id = crypto.randomUUID();
    service.getFilePath$(id).subscribe((path) => {
      expect(path).toBe(`tmp/${id}`);
      done();
    });
  });

  // todo fix it
  // it('should get a path B', fakeAsync(() => {
  //   const id = crypto.randomUUID();
  //   service.getFilePath$(id)
  //     .subscribe(path => {
  //       expect(path).toBe(`tmp/${id}`)
  //     })
  // }));

  // todo ask
  it('Micro and Macro', () => {
    setTimeout(() => console.log('setTimeout 1'));
    setTimeout(() => console.log('setTimeout 2'));
    Promise.resolve()
      .then(() => console.log('Promise A'))
      .then(() => console.log('Promise B'))
      .then(() => console.log('Promise C'));
    setTimeout(() => console.log('setTimeout 3'));
  });

  // todo final
  it('💳 Micro and Macro', fakeAsync(() => {
    let counter = 0;
    // Add micoTasks
    Promise.resolve()
      .then(() => Promise.resolve())
      .then(() => {
        counter += 10;
        // Add macroTaks
        setTimeout(() => counter++, 1_000);
      });
    // Both queue aren't processed
    expect(counter).toBe(0);
    // Process all promises
    flushMicrotasks();
    expect(counter).toBe(10);
    // Simulate time
    tick(1_000);
    expect(counter).toBe(11);
  }));

  afterEach(() => httpController.verify());
});

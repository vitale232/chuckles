import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IChuckJoke } from '../models/chuck-joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private readonly _jokes = new BehaviorSubject<IChuckJoke[]>( [] );
  readonly jokes$ = this._jokes.asObservable();

  set jokes(val: IChuckJoke[]) {
    this._jokes.next(val);
  }

  get jokes(): IChuckJoke[] {
    return this._jokes.getValue();
  }

  constructor(private http: HttpClient) { }

  getJoke(): Observable<IChuckJoke> {
    return this.http.get<IChuckJoke>(`http://api.icndb.com/jokes/random`);
  }

}

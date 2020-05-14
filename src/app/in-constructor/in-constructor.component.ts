import { Component, OnInit, OnDestroy } from '@angular/core';
import { IChuckJoke } from '../models/chuck-joke.model';
import { JokesService } from '../services/jokes.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-in-constructor',
  templateUrl: './in-constructor.component.html',
  styleUrls: ['./in-constructor.component.css']
})
export class InConstructorComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  jokes1: IChuckJoke[];
  jokes2: IChuckJoke[];

  constructor(private jokes: JokesService) {
    const requestArray1 = Array(5).fill(this.jokes.getJoke());

    this.subs.add(
      forkJoin(requestArray1).subscribe(
        (results: IChuckJoke[]) => this.jokes1 = results
      )
    );

    const requestArray2 = Array(200).fill(this.jokes.getJoke());

    this.subs.add(
      forkJoin(requestArray2).subscribe(
        (results: IChuckJoke[]) => this.jokes2 = results
      )
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

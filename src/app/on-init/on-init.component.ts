import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { forkJoin, Subscription } from 'rxjs';
import { IChuckJoke } from '../models/chuck-joke.model';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  jokes1: IChuckJoke[];
  jokes2: IChuckJoke[];

  constructor(private jokes: JokesService) { }

  ngOnInit(): void {
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

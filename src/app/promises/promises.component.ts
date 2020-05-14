import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { IChuckJoke } from '../models/chuck-joke.model';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  jokes1: IChuckJoke[];
  jokes2: IChuckJoke[];

  constructor(private jokes: JokesService) {
    const requestArray1 = Array(5).fill(this.jokes.getJoke());
    const requestArray2 = Array(200).fill(this.jokes.getJoke());

    const chucksPromise1 = async () => {
      await Promise.all(requestArray1.map(r => r.toPromise()))
                   .then( (results: IChuckJoke[]) => this.jokes1 = results );
    };

    const chucksPromise2 = async () => {
      await Promise.all(requestArray2.map(r => r.toPromise()))
                   .then( (results: IChuckJoke[]) => this.jokes2 = results );
    };

    chucksPromise1();
    chucksPromise2();
  }

  ngOnInit(): void {
  }

}

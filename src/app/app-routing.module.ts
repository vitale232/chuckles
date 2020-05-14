import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InConstructorComponent } from './in-constructor/in-constructor.component';
import { OnInitComponent } from './on-init/on-init.component';
import { PromisesComponent } from './promises/promises.component';


const routes: Routes = [
  {
    path: 'constructor',
    component: InConstructorComponent
  },
  {
    path: 'oninit',
    component: OnInitComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

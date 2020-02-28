import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Search } from './search/search.component';


const routes: Routes = [
  { path: '', component: Search}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

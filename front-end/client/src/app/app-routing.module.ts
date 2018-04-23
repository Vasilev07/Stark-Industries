import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { ROUTES } from './app-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

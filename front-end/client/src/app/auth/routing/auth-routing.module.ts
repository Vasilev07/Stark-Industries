import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { ROUTES } from './auth-routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

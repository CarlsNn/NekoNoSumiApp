import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginangularPage } from './loginangular.page';

const routes: Routes = [
  {
    path: '',
    component: LoginangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginangularPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginangularPageRoutingModule } from './loginangular-routing.module';

import { LoginangularPage } from './loginangular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginangularPageRoutingModule
  ],
  declarations: [LoginangularPage]
})
export class LoginangularPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurralPageRoutingModule } from './curral-routing.module';

import { CurralPage } from './curral.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurralPageRoutingModule
  ],
  declarations: [CurralPage]
})
export class CurralPageModule {}

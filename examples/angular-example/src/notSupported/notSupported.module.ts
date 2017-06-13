import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotSupported } from './notSupported.component';

@NgModule({
  declarations: [
    NotSupported
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NotSupported]
})
export class NotSupportedModule { }

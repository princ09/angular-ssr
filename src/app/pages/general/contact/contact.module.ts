import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    provideClientHydration()
  ],
})
export class ContactModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  exports: [
    SignupComponent
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    provideClientHydration()

  ],
})
export class SignupModule { }
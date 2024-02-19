import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ExerciceComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  imports: [
    ExerciceRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExerciceComponent
  ],
})
export class ExerciceModule { }

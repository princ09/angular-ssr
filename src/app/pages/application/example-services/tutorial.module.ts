import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';

import { SafePipe } from './safe.pipe';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TutorialComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  exports: [
    TutorialComponent,
  ],
  providers: [ provideClientHydration() ]
})
export class TutorialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TutorialComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
  ],
  providers: [ provideClientHydration() ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }

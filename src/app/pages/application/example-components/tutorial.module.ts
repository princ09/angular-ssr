import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { ChannelComponent } from './channel/channel.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TutorialComponent,
    ChannelComponent
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

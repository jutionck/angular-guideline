import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  HeadersComponent,
  HighlightCardComponent,
  ResourcesComponent,
  NextStepsComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class PagesModule { }

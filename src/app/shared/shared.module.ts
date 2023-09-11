
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CommonModule,
    CarouselModule,
  ],
  providers: [
  ]
})
export class SharedModule {}

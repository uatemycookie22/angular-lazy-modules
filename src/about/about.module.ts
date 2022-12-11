import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, MatIconModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}

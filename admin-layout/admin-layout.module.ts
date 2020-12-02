import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}

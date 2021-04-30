import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [NavbarComponent, TestErrorComponent, ServerErrorComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    HotToastModule.forRoot({
      dismissible: true,
      position: 'bottom-center',
    }),
  ],
  exports: [NavbarComponent, HotToastModule],
})
export class CoreModule {}

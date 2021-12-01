import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AngularMaterialModule } from './modules/angular-material.module';
import { SyncfusionModule } from './modules/syncfusion.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  //main
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainLayoutComponent },
];

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule,
    SyncfusionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

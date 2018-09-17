import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';

import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';


import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { HomepageComponent } from './homepage/homepage.component';
import { CharctersComponent } from './charcters/charcters.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';




import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CharctersComponent,
    UsersComponent
  ],
  imports: [
    
    BrowserModule,
    NgxSpinnerModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    
    RouterModule.forRoot([
      { path:'home-view', component:HomepageComponent },
      { path:'characters-view/:house', component:CharctersComponent },
      { path:'users/:user', component:UsersComponent },
      { path:"", redirectTo:"home-view",pathMatch:"full" },
      { path: "**", redirectTo: "region-view", pathMatch: "full" },
      

    ])

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

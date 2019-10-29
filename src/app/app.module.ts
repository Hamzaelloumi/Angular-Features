import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { RobotComponent } from './robot/robot.component';
import { ChatModule } from './chat/chat.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListcomponentComponent,
    ScrollingComponent,
    AutoCompleteComponent,
    HomeComponent,
    RobotComponent,
    PagenotfoundComponent,
    DrivenFormComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule, 
    ScrollingModule, 
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ChatModule, 
    CommonModule

  ],
  

  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

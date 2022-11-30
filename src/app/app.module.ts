import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component'

const myroute:Routes=[
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"emplogin",
    component:EmployeeLoginComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
  },
  {
    path:"viewfriend",
    component:ViewFriendsComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"empregister",
    component:EmployeeRegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    AdminNavbarComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    EmployeeNavbarComponent,
    AddCourseComponent,
    AddFriendComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

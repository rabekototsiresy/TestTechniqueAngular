import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from '../add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'add', component: AddUserComponent },
      { path: '', component: UsersComponent },

    ])
  ]
})
export class UsersModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  addForm = this._formBuilder.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    name: ['', Validators.required],
    phone: [''],
    website: [''],
});

  constructor(private _formBuilder: FormBuilder, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.addForm.valid) {
      this.userService.addUser(this.addForm.value).subscribe(res => {
        if (res) {
          console.log('res = ', res);
          // this.router.navigate(["/users"]);
          this.router.navigate(["/users"], {state: { newData: this.addForm.value }})
          
        }
      })
    }
    
  }

}

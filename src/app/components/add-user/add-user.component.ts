import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

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
    site: [''],
});

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.addForm.valid) {
      this.router.navigate(["/users"], {state: { newData: this.addForm.value }})
    }
    
  }

}

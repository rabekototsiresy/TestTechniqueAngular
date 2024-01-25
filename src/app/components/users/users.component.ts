import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UsersService, private router: Router) {
    if (this.router.getCurrentNavigation()) {
      console.log(this.router.getCurrentNavigation()?.extras.state); // should log out 'bar'
      const { newData } = this.router.getCurrentNavigation()?.extras.state as any;
      
      this.users.push({
        ...newData
      })
    }

  }



  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getUsers() || [];

    console.log('users = ', this.users);
    
  }


}

import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements AfterViewInit{

  users: any[] = [];
  addUser: any = null;

  constructor(private userService: UsersService, private router: Router) {
    if (this.router.getCurrentNavigation()) {
      const data = this.router.getCurrentNavigation()?.extras.state;
      if (data) {
        const { newData } = this.router.getCurrentNavigation()?.extras.state as any;
        
        this.addUser = newData;
      }
    }

  }



  // ngOnInit(): void {
  //   this.users.unshift({
  //     ...this.addUser 
  //   })
  
  //   console.log("le = ", this.users.length);
  // }
  
  async ngAfterViewInit(): Promise<void> {
    this.users = await this.userService.getUsers() || [];
    if (this.addUser) {
      this.users.unshift({...this.addUser})
      console.log('user = ', this.users.length);
      
    }
  
    // console.log('users = ', this.users);
  }


}

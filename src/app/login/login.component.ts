import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./user.service";
import {Message} from 'primeng/components/common/api';
import {User} from './User';



@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserService]
})


export class LoginComponent implements OnInit {
 model: any = {};
    loading = false;
    error = '';
  @Input() user: User ;
  users: User[];
  
  constructor( private UserService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user=new User();
    this.UserService.getUsers().then(users => this.users = users)  }

    login() {
      
      
      var i=0
      while (i < this.users.length && this.users[i].username !== this.user.username)
      {
        i++;
      }
      if (i < this.users.length && this.users[i].password === this.user.password) {
        localStorage.setItem("user", JSON.stringify(this.users[i]));
        this.router.navigate(['dashboard']);
        
      }
          
    }
}

import { Component, OnInit , OnDestroy} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Message} from 'primeng/components/common/api';
import 'rxjs/add/operator/finally';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  displayDialog: boolean;
  msgs: Message[] = [];
  user: User = new PrimeUser();

  selectedUser: User;

  newUser: boolean;

  users: User[];
  userForDialog: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }
 

      save(bike: User): void {
 
   this.userService.CreateUser(bike).subscribe(layers => {
      console.log("Response" +layers);})
     this.user=null;
     this.displayDialog=false;
  }


   delete(bike: User): void {
    this.userService
      .deleteUser(bike)
      .then(() => {
        this.users = this.users.filter(h => h !== bike);
        if (this.selectedUser === bike) { this.selectedUser = null; }
      });
    this.user=null;
    this.displayDialog=false;
     }



  private showError(errMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: 'Sorry, an error occurred', detail: errMsg});
  }

  private showSuccess(successMsg: string) {
    this.msgs = [];
    this.msgs.push({severity: 'success', detail: successMsg});
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new PrimeUser();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }

  cloneUser(c: User): User {
    const user = new PrimeUser();
    for (const prop in c) {
      user[prop] = c[prop];
    }
    return user;
  }

  findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
  }
}

class PrimeUser implements User {

  constructor(public id?, public username?, public password?) {}
}

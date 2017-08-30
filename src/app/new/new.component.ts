import { Component, OnInit } from '@angular/core';
import {Migration} from '../dashbboard/migration';
import {MigrationService} from '../dashbboard/migration.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
migrations: Migration[];
 
  constructor(private migService: MigrationService) { }

  ngOnInit() {
        this.migService.getUsers().then(users => this.migrations = users);

  }
  
   
}

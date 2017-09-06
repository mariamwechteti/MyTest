import { Component, OnInit,Input  } from '@angular/core';
import {MigrationService} from '../dashbboard/migration.service';
import {Message} from 'primeng/components/common/api';
import {Migration} from '../dashbboard/migration';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
migrations: Migration[];
 @Input() model:Migration;
   resp: String;
   msgs: Message[] = [];
  constructor(private migService: MigrationService) { }

  ngOnInit() {
   this.model=new Migration();
    this.model.email="";
  this.model.svn="";
  this.model.git="";
  this.model.date="";
  }
  send()
  {}
  showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'you have just started the migration process !!!'});
    }
   
}

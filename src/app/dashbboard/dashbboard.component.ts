import { Component, OnInit,Input } from '@angular/core';
import {Migration} from './migration';
import {MigrationService} from './migration.service';
import {Message} from 'primeng/components/common/api';
import 'rxjs/add/operator/finally';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-dashbboard',
  templateUrl: './dashbboard.component.html',
  styleUrls: ['./dashbboard.component.css']
})
export class DashbboardComponent implements OnInit {
   
  @Input() model:Migration;
   resp: String;
   msgs: Message[] = [];
  constructor(private migrationService: MigrationService,private http: Http) {
    
   }

  ngOnInit() { 
    this.model=new Migration();
    this.model.email="";
  this.model.svn="";
  this.model.git="";

   
}
 showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'you have just started the migration process !!!'});
    }

    getStream(){
      this.migrationService.Migration(this.model).subscribe(layers => {
      this.resp=layers;
      console.log("Response" +layers);
         if(layers.json().success) {
                this.http.post('http://localhost:8080/sendmail', this.model.email).subscribe((data) => {
            if(data.json().success) {
              console.log('Sent successfully');
            }
         })
       }
    })
   
 }

}


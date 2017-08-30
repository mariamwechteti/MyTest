import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
msgs: Message[];
  constructor() { }

  ngOnInit() {
  }

 
    
    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
}

import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { fade } from './animation';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.scss'], 
  animations: [
   fade
  ]
})
export class ListcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}

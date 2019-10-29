import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  userList: User[] = [];
  constructor() { }

  ngOnInit() {
  }

  addUser(form){

    var user: User;
    user=form.value;
    this.userList.push(user);
    form.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { scan } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue : string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))       )
  }



  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue= ''; 
  }
}

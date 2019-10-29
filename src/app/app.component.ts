import { Component } from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShown: boolean = false ;
  title = 'angular-pro-sidebar';

  constructor(public sidebarservice: SidebarService) { 
    
   }
  toggleSidebar() {
    this.hide();
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
        
  }
hide() {
  if (this.sidebarservice.toggled === true) {
    console.log('here');
    this.isShown = true ; 
  } else {
    this.isShown = false ; 
  }
}
 
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
 
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
    this.isShown = false ; 
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RobotComponent } from './robot/robot.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [

  { path: '', component: SidebarComponent },
  {
    path:'ChatBot' , component: ChatDialogComponent
  },
  {
    path:'DrivenForm' , component: DrivenFormComponent
  },
  {
    path:'ReactiveForm' , component: ReactiveFormComponent
  },
  {
    path: 'page-not-found', 
    component: PagenotfoundComponent
},
{
    path: '**', 
    redirectTo: '/page-not-found'
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

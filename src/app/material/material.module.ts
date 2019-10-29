import { NgModule } from '@angular/core';
import { MatAutocompleteModule , MatInputModule } from '@angular/material';

const MaterialComponent = [
  MatInputModule ,
  MatAutocompleteModule

]

@NgModule({
  declarations: [],
  imports: [MaterialComponent], 
  exports : [MaterialComponent]
})
export class MaterialModule { }

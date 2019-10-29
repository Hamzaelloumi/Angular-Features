import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import {map , startWith } from 'rxjs/operators';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  options: string[] = ['Angular', 'React' , 'VueJS'];
  objectOptions = [
    { name: 'Angular'} , 
    { name: 'React'} , 
    { name: 'Vue'} , 
    { name: 'Material'} 
  ]; 

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions= this.myControl.valueChanges.pipe(
      startWith(''), 
      map(value => this._filter(value))
    );
  }
private _filter (value : string):string[] {
  const filterValue = value.toLowerCase()
  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
    displayFn(subject) {
      return subject ? subject.name : undefined;
    }
}

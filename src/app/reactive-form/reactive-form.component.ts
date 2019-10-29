import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, Form } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
    userForm: FormGroup;
    fullName : FormControl;
    email : FormControl; 
    skillName: FormControl;
    experienceInYears: FormControl;
    proficiency : FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();


    //Method 1 
    /* this.userForm = this.fb.group({
      fullName:['', Validators.required],
      email : ['' , [Validators.required , Validators.pattern("[^ @]*@[^ @]*")]),

      //Create skills form group
      skills : this.fb.group({
        skillName : [''],
        experienceInYears: [''],
        proficiency : ['beginner'],
      })
    }) */



 /*    //Reactive Form Method 2 
    this.userForm = new FormGroup({
      fullName: new FormControl('' , Validators.required),
      email : new FormControl('', 
      [
        Validators.required, 
        Validators.pattern("[^ @]*@[^ @]*")
      
      ]),

      //Create skills form group
      skills : new FormGroup({
        skillName : new FormControl('', [
          Validators.required, 
          Validators.minLength(8),
        ] ),
        experienceInYears: new FormControl('', [
          Validators.required, 
          Validators.maxLength(2)
        ]),
        proficiency : new FormControl(),
      })
    }) */
  }

createFormControls() {
  this.fullName = new FormControl('' , Validators.required);
  this.email =  new FormControl('', 
  [
    Validators.required, 
    Validators.pattern("[^ @]*@[^ @]*")
  
  ]); 

  this.skillName = new FormControl('', [
    Validators.required, 
    Validators.minLength(8),
  ]);

  this.experienceInYears = new FormControl('', [
    Validators.required, 
    Validators.maxLength(2)
  ]);
  this.proficiency = new FormControl();
}

createForm() {
  this.userForm = new FormGroup({
    fullName: this.fullName,
    email : this.email,

    //Create skills form group
    skills : new FormGroup({
      skillName : this.skillName,
      experienceInYears: this.experienceInYears,
      proficiency : this.proficiency,
    })
  })
}


  onSubmit(){
      if(this.userForm.valid)
      {
      console.log("Form Submitted" , this.userForm.value);
      this.userForm.reset();
      }
  }
  onLoadDataClick() {

    // To update All Forms Controls 
 /*    this.userForm.setValue({
      fullName : 'Hamza' , 
      email : 'Hamza.elloumi@yahooo.fr', 
      skills : {
        skillName : 'Java' , 
        experienceInYears : 5 , 
        proficiency:'beginner'
      }
    }); */

 // To update set of Controls 

    this.userForm.patchValue({
      fullName : 'Hamza' , 
      email : 'Hamza.elloumi@yahooo.fr'
    });



  }
}

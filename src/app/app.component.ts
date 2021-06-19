import { Component,ElementRef,OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders=['male','female'];

  signUpForm:FormGroup;

  ngOnInit(){
    this.signUpForm=new FormGroup({
      userData:new FormGroup({
        username:new FormControl('',[Validators.required, Validators.nullValidator]),
      email:new FormControl('',[Validators.required,Validators.email]),
      }),

      gender:new FormControl('male',[Validators.required]),
      'hobbies':new FormArray([

      ])
    });
}
get Hobbies(){
  return (this.signUpForm.get('hobbies') as FormArray).controls;
}
onAddHobby(){
  const control=new FormControl(null,Validators.required);
  (<FormArray>this.signUpForm.get('hobbies')).push(control);
}
onSubmit(){
  console.log(this.signUpForm);
}

}


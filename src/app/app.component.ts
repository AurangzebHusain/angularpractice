import { Component,ElementRef,OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {ControlContainer, FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders=['male','female'];
  forbiddenUserNames=['Chris','Anna'];

  signUpForm:FormGroup;

  ngOnInit(){
    this.signUpForm=new FormGroup({
      userData:new FormGroup({
        username:new FormControl('',[Validators.required, this.forbiddenNames.bind(this)]),
      email:new FormControl('',[Validators.required,Validators.email],this.forbiddenEmails.bind(this)),
      }),

      gender:new FormControl('male',[Validators.required]),
      'hobbies':new FormArray([

      ])
    });

    this.signUpForm.valueChanges.subscribe((value)=>{
      console.log(value);
    })
    this.signUpForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })
    this.signUpForm.setValue({

    })
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

forbiddenNames(control:FormControl):{[s:string]:boolean}{
  if(this.forbiddenUserNames.indexOf(control.value) !==-1){
    return {'nameIsForbidden':true};
  }
  return null;
}

forbiddenEmails(control:FormControl):Promise<any> | Observable<any>{
  const promise=new Promise <any>((resolve,reject)=>{
    setTimeout(()=>{
      if(control.value==='test@TestBed.com'){
        resolve ({'emailIsForbidden':true});
      }
      else{
        resolve(null)
      }
    }, 1500);
  });
  return promise;
}

}


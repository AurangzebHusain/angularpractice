import { Component,ElementRef,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  title = 'angular-workshop';
  defaultQuestion= "pet";
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted: boolean;

// onSubmit(form:NgForm){
// console.log(form);
// }
suggestUserName(){
  const suggestedName='Superuser';
  // this.signupForm.setValue({
  //   userData:{
  //     username:suggestedName,
  //     email:''
  //   },
  //   secret:'pet',
  //   answer:'',
  //   gender:'male'
  // });
  this.signupForm.form.patchValue({
    userData:{
      username:suggestedName
    }
  })
}
onSubmit(){
  console.log(this.defaultQuestion);
console.log(this.signupForm);
this.submitted=true;
this.user.username=this.signupForm.value.userData.username;
this.user.email=this.signupForm.value.userData.email;
this.user.secretQuestion=this.signupForm.value.secret;
this.user.answer=this.signupForm.value.answer;
this.user.gender=this.signupForm.value.gender;
this.signupForm.reset();
}
}

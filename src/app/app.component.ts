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

// onSubmit(form:NgForm){
// console.log(form);
// }

onSubmit(){
console.log(this.signupForm);
}
}

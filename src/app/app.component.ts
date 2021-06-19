import { Component,ElementRef,OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
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
      username:new FormControl('',[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender:new FormControl('male',[Validators.required]),
    });
}

}


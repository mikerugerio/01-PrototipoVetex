import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'fmReactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class FmReactiveComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'datosUsuario': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}

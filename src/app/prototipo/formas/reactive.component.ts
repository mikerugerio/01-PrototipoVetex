import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'fmReactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class FmReactiveComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  usuariosProhibidos = ['Mike','Dani'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'datosUsuario': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.usuariosProhibidos.indexOf(control.value)!== -1){
      return {'nombreEsProhibido':true};
    }
    return null;
  }
}

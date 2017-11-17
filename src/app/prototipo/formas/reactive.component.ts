import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() =>{
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },2000);
    });
    return promise;
  }

}

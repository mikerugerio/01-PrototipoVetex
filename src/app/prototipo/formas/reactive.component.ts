import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

// State constant declaration
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'Guadalajara'];

@Component({
  selector: 'fmReactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class FmReactiveComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  usuariosProhibidos = ['Mike','Dani'];

  titulo = "Pantalla Reactiva";

  ngOnInit(){
    this.signupForm = new FormGroup({
      'datosUsuario': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
      'estados': new FormControl(),
      'productType': new FormControl(),
      'product': new FormControl(),
      'product2': new FormControl(),
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

  // Default Search
  busqueda = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : states.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 15));

  productTypes = ['small', 'large'];
  allProducts = [
    {name: 'SmallWidget1', type: 'small'},
    {name: 'SmallWidget2', type: 'small'},
    {name: 'SmallWidget3', type: 'small'},
    {name: 'LargeWidget1', type: 'large'},
    {name: 'LargeWidget2', type: 'large'}
  ];
  productsAfterChangeEvent = [];

  // Rebuild the product list every time the product type changes.
  typeChanged() {
    const productType = this.signupForm.get('productType').value;
    this.productsAfterChangeEvent = this.allProducts.filter(p => p.type == productType);
  }

  onPrueba($event){
    console.log("Prueba on Click", $event);
  }

  presionar(correo){
    console.log(correo)
  }
}

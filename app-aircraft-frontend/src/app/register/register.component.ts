import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { User } from './user';


//custom validator om meerdere inputvelden ten opzichte van elkaar te validaten
function emailMatcher(c:AbstractControl):{[key:string]: boolean} | null{
  const emailControl= c.get('email');
  const confirmControl =c.get('confirmEmail');

  //indien emailinput of confirmemailinput nog niet 'aangeraakt' zijn, return null --> geen error
  if(emailControl.pristine || confirmControl.pristine){
    return null;
  }

  //indien email en confirmemail gelijk zijn aan elkaar (en beide voldoen aan 'email' requirement omdat email daaraan moet voldoen) --> return null = geen error
  if(emailControl.value === confirmControl.value){
    return null;
  }

  //anders: return object met true --> error
  return{'match': true}

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user = new User();
  emailMessage: string;

   private validationMessages ={
    required: 'Please enter your email address',
    email: 'Please enter a valid email address'
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
firstName:[ '', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup:this.fb.group({
email: ['', [Validators.required, Validators.email]],
      confirmEmail:['', Validators.required],
      }, {validator: emailMatcher}), // validator moet meegegeven worden in een object omdat het hier gaat over een formgroup die gevalideerd wordt en niet 1 formcontrol
     passwordGroup:this.fb.group({
password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      }, 
      // {validator: emailMatcher}
      ),
    })
  }
populateTestData(): void{
  //.setValue om alle inputs in te vullen, .patchValue om een deel van de inputs in te vullen
  this.registerForm.patchValue({
    firstName: "Jack",
    lastName: "Harkness",
    sendCatalog: false
  })
}
  save(): void {
    
    console.log(this.registerForm);
    console.log('Saved: ' + JSON.stringify(this.registerForm.value));
  }
  setMessage(c:AbstractControl): void{
  this.emailMessage ='';
  if(c.touched||c.dirty &&c.errors){
    this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join('');

  }
}
}

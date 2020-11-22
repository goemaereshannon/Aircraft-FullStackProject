import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'
import { User } from './user';


//custom validator om meerdere inputvelden ten opzichte van elkaar te validaten
function inputMatcher(formgroup: string):ValidatorFn{
  return (c:AbstractControl):{[key:string]: boolean} | null => {
  const control= c.get(formgroup);
  console.log({control})
  const confirmControl =c.get(`confirm${formgroup.charAt(0).toUpperCase()+formgroup.slice(1)}`);

  //indien emailinput of confirmemailinput nog niet 'aangeraakt' zijn, return null --> geen error
  if(control.pristine || confirmControl.pristine){
    return null;
  }

  //indien email en confirmemail gelijk zijn aan elkaar (en beide voldoen aan 'email' requirement omdat email daaraan moet voldoen) --> return null = geen error
  if(control.value === confirmControl.value){
    return null;
  }

  //anders: return object met true --> error
  return{'match': true}

}}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user = new User();
  validationMessage ={
    emailMessage:"",
    passwordMessage:''

  }

   private validationMessages ={
     email:{
       required: 'Please enter your email address',
    email: 'Please enter a valid email address',
     },
    password:{
 minlength:'Please enter a valid password. It has to be at least 8 characters.'
    }
   
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
firstName:[ '', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup:this.fb.group({
email: ['', [Validators.required, Validators.email]],
      confirmEmail:['', Validators.required],
      }, {validator: inputMatcher('email')}), // validator moet meegegeven worden in een object omdat het hier gaat over een formgroup die gevalideerd wordt en niet 1 formcontrol
     passwordGroup:this.fb.group({
password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      }, {validator: inputMatcher('password')}
      // {validator: emailMatcher}
      ),
    })
    const emailControl = this.registerForm.get('emailGroup.email');
   // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

   //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
   emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage("email", emailControl))
   const passwordControl = this.registerForm.get('passwordGroup.password');
   // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

   //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
   passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage("password", passwordControl))
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
  setMessage(formgroup: string, c:AbstractControl): void{
  this.validationMessage.emailMessage ='';
  this.validationMessage.passwordMessage =''
  console.log({formgroup})
  console.log({"control": c})
  if(c.touched||c.dirty &&c.errors){
    console.log({"errors":c.errors})
      
    this.validationMessage[`${formgroup}Message`] = Object.keys(c.errors).map(key => this.validationMessages[formgroup][key]).join('');
    console.log({"emailMessage":this.validationMessage[`${formgroup}Message`]})

  }
}
}

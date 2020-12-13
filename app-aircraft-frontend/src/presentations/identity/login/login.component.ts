import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { LoginData } from '../user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  // user = new User();
  loginData: LoginData;
  parsedToken: Object;
  validationMessage = {
    emailMessage: '',
    passwordMessage: '',
  };

  private validationMessages = {
    email: {
      required: 'Please enter your email address',
      email: 'Please enter a valid email address',
    },
    password: {
      minlength:
        'Please enter a valid password. It has to be at least 8 characters.',
    },
  };
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const emailControl = this.loginForm.get('email');
    // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

    //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setMessage('email', emailControl));
    const passwordControl = this.loginForm.get('password');
    // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));

    //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
    passwordControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setMessage('password', passwordControl));
  }

  populateTestData(): void {
    //.setValue om alle inputs in te vullen, .patchValue om een deel van de inputs in te vullen
    this.loginForm.patchValue({
      email: 'alexandra.christiaens@student.howest.be',
      password: 'Azerty*2020',
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log({ loginformDirty: this.loginForm.dirty });
      if (this.loginForm.dirty) {
        this.loginData = this.initializeData();
        this.loginData.email = this.loginForm.get('email').value;
        this.loginData.password = this.loginForm.get('password').value;
        console.log({ user: this.loginData });

        this.userService.loginUser(this.loginData).subscribe({
          next: (data) => this.onSaveComplete(data),
          error: (err) => {
            this.errorMessage = err;
            this.validationMessage['emailMessage'] = err;
          },
        });
      }
    }
  }
  setMessage(formgroup: string, c: AbstractControl): void {
    this.validationMessage.emailMessage = '';
    this.validationMessage.passwordMessage = '';
    console.log({ formgroup });
    console.log({ control: c });
    if ((c.touched || c.dirty) && c.errors) {
      console.log({ errors: c.errors });

      this.validationMessage[`${formgroup}Message`] = Object.keys(c.errors)
        .map((key) => this.validationMessages[formgroup][key])
        .join('');
      console.log({
        emailMessage: this.validationMessage[`${formgroup}Message`],
      });
    }
  }
  private initializeData(): LoginData {
    return { email: '', password: '' };
  }
  onSaveComplete(data: any): void {
    // Reset the form to clear the flags
    this.loginForm.reset();
    this.parsedToken = this.userService.parseJwt(data.token);

    console.log(this.parsedToken);
    localStorage.setItem('token', data.token);
    console.log('ingelogd');
    // if (
    //   this.parsedToken[
    //     'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    //   ]
    // ) {
    // }
    //this.router.navigate(['/products']);
  }
}

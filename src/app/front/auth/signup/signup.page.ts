import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../../shared/services/location/location.service';
// import { MustMatch } from '../shared/services/MustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  registrationMessage: String = '';
  waitingRegistration = false;
  country: any = [];
  city: any = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: LocationService
    ) { }

  ngOnInit(): void {
    this.country = this.location.country();
    this.registerForm = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'user_agree': new FormControl(false, [Validators.requiredTrue]),
      'lastName': new FormControl(''),
      'country': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      // 'phone': new FormControl('', [Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^6[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$'), Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      // 'password2': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),

    },
    // {
    //   validator: MustMatch('password', 'password2')
    // }
    );
  }
  onSelect(country){
    this.city = this.location.city()
    .filter(e =>
     e.id == country.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.registerForm.controls;
  }

  navigateToSigninPage() {
    this.router.navigate(['auth/login']);
  }

  submit() {
    this.submitted = true;
    console.log('Reg form avant setform', this.registerForm);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // this.waitingRegistration = true;
    this.navigateToSigninPage();
  }
}


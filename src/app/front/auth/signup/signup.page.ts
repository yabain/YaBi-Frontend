import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { YUser } from 'src/app/shared/entities/users';
import { LocationService } from '../../../shared/services/location/location.service';
import { YUserStoreService } from 'src/app/shared/services/store/yuser/yuser-store.service';
import { UserPreferenceService } from 'src/app/shared/services/user/user-preference/user-preference.service';
import { YUserProfilService } from 'src/app/shared/services/user/user-profil/yuser-profil.service';
import { FirebaseError } from 'src/app/shared/utils/services/firebase';
// import { MustMatch } from '../shared/services/MustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  registrationMessage = '';
  waitingRegistration = false;
  country: any = [];
  city: any = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: LocationService,
    private preferencesService: UserPreferenceService,
    private usersStoreService: YUserStoreService,
    private userProfile: YUserProfilService
    ) {
      preferencesService.getPreferencesFromDevice();
    }

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
      this.submitted = false;
      return;
    }
    // this.waitingRegistration = true;
    let user = new YUser();

    user.hydrate(this.registerForm.value);
    if ( user.country == '1'){
      console.log('test');
      user.country = 'Cameroun'
    } else if ( user.country == '2'){
      user.country = 'Congo'
    } else if ( user.country == '3'){
      user.country = 'Gabon'
    } else if ( user.country == '4'){
      user.country == 'Guinée équatoriale'
    } else if ( user.country == '5'){
      user.country = 'RC'
    }
    console.log('user data: ', user);
    this.usersStoreService.createNewAccount(user)
      .then((result) => {
        this.userProfile.setUser(user);
        // return this.userPreference.initPreference()
        console.log('Good: Utilisateur enregistré!');
        this.navigateToSigninPage();
      })
      .catch((error) => {
        FirebaseError.handleApiError(error);
        this.submitted = false;
        console.error('Erreur: ', error);
      });
  }

}


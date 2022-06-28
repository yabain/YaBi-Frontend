import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { YUser } from 'src/app/shared/entities/users';
import { LocationService } from '../../../shared/services/location/location.service';
import { YUserStoreService } from 'src/app/shared/services/store/yuser/yuser-store.service';
import { UserPreferenceService } from 'src/app/shared/services/user/user-preference/user-preference.service';
import { YUserProfilService } from 'src/app/shared/services/user/user-profil/yuser-profil.service';
import { FirebaseError } from 'src/app/shared/utils/services/firebase';
import { RegisterService } from 'src/app/shared/services/user/auth/register.service';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';
// import { MustMatch } from '../shared/services/MustMatch';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  error = false;
  errorMsg = '';
  success = false;
  waitingRegistration = false;
  country: any = [];
  city: any = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: LocationService,
    private preferencesService: UserPreferenceService,
    private userProfile: YUserProfilService,
    private registerService: RegisterService,
    private authService: AuthService,
    langService: LanguageService,
    translate: TranslateService,
   ) {
     translate.use(langService.getLanguage());

      if ( this.authService.isLoggedIn.getValue() == true){
        this.router.navigate(['folder']);
      }
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
    this.waitingRegistration = false;
    this.error = false;
    this.success = false;
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
    console.log('Reg form avant setform', this.registerForm);
    this.error = false;
    this.success = false;
    this.waitingRegistration = false;
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
    this.waitingRegistration = true;

    let user = new YUser();

    user.hydrate(this.registerForm.value);
    if ( user.country == '1'){
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
    // this.navigateToSigninPage();

    this.success = true;
    setTimeout(()=>{
      this.waitingRegistration = false;
      this.router.navigate(['auth/login']);
      this.success = false;
  }, 3000);
    
    // this.registerService.register(user)
    //   .then((result) => {
    //     localStorage.setItem('username', user.firstName.toString());
    //     this.userProfile.setUser(user);
    //       this.success = true;
    //       setTimeout(()=>{
    //         this.router.navigate(['auth/login']);
    //         this.success = false;
    //         this.waitingRegistration = false;
    //     }, 4000);
    //     console.log('Good: Utilisateur enregistré!');
    //     this.submitted = false;
    //   })
    //   .catch((error) => {
    //     FirebaseError.handleApiError(error);;
    //     this.error = true;
    //     this.errorMsg = error.message;
    //     console.error('Erreur: ', error);
    //     this.submitted = false;
    //     this.waitingRegistration = false;
    //   });
  }

}

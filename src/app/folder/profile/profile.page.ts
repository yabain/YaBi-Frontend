import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/elements/modal/modal.component';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  submitted = false;
  settingsForm: FormGroup;
  waitingSaveSattings = false;
  success = false;
  error = false;

title = 'Profil';
userId = '12012010';
userName = 'Utilisateur 1';
country = 'Cameroun';
city = 'Bangangté';
phone = '672 764 654';
email = 'user@yabain.com';

dataReturned: any;

  constructor(
    private router: Router,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private langService: LanguageService,
    translate: TranslateService,
    ) {
      translate.use(langService.getLanguage());
      console.log('Venant du service: ', langService.getLanguage());
    }


  async openModal(title?, value?, description?) {
    if (value == 'userName'){
      value = this.userName ;
    } else if (value == 'country'){
      value = this.country ;
    } else if (value == 'city'){
      value = this.city ;
    } else if (value == 'phone'){
      value = this.phone ;
    } else if (value == 'email'){
      value = this.email ;
    }
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'modalValue': value,
        'modalTitle': title,
        'modalDescription': description,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      'language': new FormControl('fr', [Validators.required]),
      'theme': new FormControl('light', [Validators.required]),
    }),
    this.waitingSaveSattings = false;
    this.error = false;
    this.success = false;
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['auth/login']);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.settingsForm.controls;
  }

  saveSettings(){
    this.error = false;
    this.success = false;
    this.waitingSaveSattings = false;
    this.submitted = true;
    // stop here if form is invalid
    if (this.settingsForm.invalid) {
      return;
    }
    this.submitted = true;
    this.waitingSaveSattings = true;
    console.log('changement de langue: ',this.settingsForm.value.language);
    this.langService.setLanguage(this.settingsForm.value.language);
  }

}

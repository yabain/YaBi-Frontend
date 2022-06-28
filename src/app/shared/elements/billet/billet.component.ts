import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, PopoverController, NavController, Platform } from '@ionic/angular';
import { PopComponent } from '../pop/pop.component';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/user/language/language.service';
import { TranslateService } from '@ngx-translate/core';
// import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
// import { Filesystem, FilesystemDirectory } from '@capacitor/core';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.scss'],
})
export class BilletComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  title: string;
  billetTitle: string;
  billetOwner: string;
  billetType: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  place: string;
  city: string;
  country: string;
  organiser: string;
  owner: string;

  pdfObj = null;

  letterObj = {
    to: '',
    from: '',
    text: ''
  };

  unLockForm: FormGroup;
  submitted = false;

  constructor(
    private modalController: ModalController,
    public popoverController: PopoverController,
    private navParams: NavParams,
    private router: Router,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    // private plt: Platform,
    // private file: File,
    // private fileOpener: typeof FileOpener,
     langService: LanguageService,
     translate: TranslateService,
    ) {
      translate.use(langService.getLanguage());
  }

  ngOnInit() {
    this.unLockForm = this.formBuilder.group({
      num1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num2: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num3: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num4: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    });

    console.table(this.navParams);
    this.billetTitle = this.navParams.data.billetTitle;
    this.billetOwner = this.navParams.data.billetOwner;
    this.billetType = this.navParams.data.billetType;
    this.startDate = this.navParams.data.startDate;
    this.startTime = this.navParams.data.startTime;
    this.endDate = this.navParams.data.endDate;
    this.endTime = this.navParams.data.endTime;
    this.place = this.navParams.data.place;
    this.city = this.navParams.data.city;
    this.country = this.navParams.data.country;
    this.organiser = this.navParams.data.organiser;
    this.owner = this.navParams.data.owner;
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.unLockForm.controls;
  }

  unLock() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.unLockForm.invalid) {
      return;
    }
    this.submitted = true;
    let key = this.unLockForm.value.num1;
    console.log(key);
    this.largeModal.hide();
    // window.location.reload();
    this.navigateToCodeGenerator();
    // document.getElementById("unLockForm").reset();
  }
  navigateToCodeGenerator() {
    this.router.navigate(['folder/qr-code/generation']);
  }
  navigateToProfilPage() {
    this.router.navigate(['folder/profile']);
  }

  pdfDowload() {
    const docDef = {
      // tailler en string ou { whidth: number, height: number}
      pageSize: 'A3',

      // nous utilisons portrait par defaut, possibilité d'utiliser landscape
      pageOrientation: 'portarit',

      //[left, top, right, bottom] or [ horiz, vertic]
      pageMargins: [20, 10, 20, 60],
      content: [
        { text: 'YaBi events', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        this.letterObj.to,

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    };
    this.pdfObj = pdfMake.createPdf(docDef);
  }

  downloadPdf() {
    // if (this.plt.is('cordova')) {
    //   this.pdfObj.getBase64(async (data) => {
    //     try {
    //       const path = `YaBi/myPass_${Date.now()}.pdf`;

    //       const result = await Filesystem.writeFile({
    //         path,
    //         data,
    //         directory: FilesystemDirectory.Documents,
    //         recursive: true
    //       });
    //       this.fileOpener.open(`${result.uri}`, 'application/pdf');
    //     } catch (e) {
    //       console.error('Erreur de sauvegarde du billet. ', e);
    //     }
    //   });

    // } else {
    //    On a browser simply use download!
    //   this.pdfObj.download('myPass.pdf');
    // }
  }


}

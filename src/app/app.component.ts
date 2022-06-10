import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Catégorie', url: 'folder/categories', icon: '../assets/icon/icon_calendar.png', labels: 'Catégorie' },
    { title: 'Mes billets', url: 'folder/billes', icon: '../assets/icon/icon_barcode.png', labels: 'Billets' },
    { title: 'Mes favoris', url: 'folder/favoris', icon: '../assets/icon/icon_badg.png', labels: 'Favoris' },
    { title: 'Mes invitations', url: 'folder/invitations', icon: '../assets/icon/icon_folder.png', labels: 'Invitations' },
    { title: 'YaBi wallet', url: 'folder/wallet', icon: '../assets/icon/icon_wallet.png', labels: 'Wallet' },
    { title: 'QR scan', url: 'folder/qr-code/scan', icon: '../assets/icon/icon_barcode.png', labels: 'Historique' },
    { title: 'QR generation', url: 'folder/qr-code/generation', icon: '../assets/icon/icon_barcode.png', labels: 'Historique' },
    { title: 'Historique', url: 'folder/history', icon: '../assets/icon/icon_history.png', labels: 'Historique' },
  ];
  public labels = ['Catégorie', 'Billets', 'Favoris', 'Invitations', 'Wallet', 'Historique'];
  constructor( private router: Router) {
  }
}

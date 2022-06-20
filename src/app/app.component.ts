import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Catégorie', url: 'folder/categories', icon: 'albums', labels: 'Catégorie' },
    { title: 'Mes billets', url: 'folder/billes', icon: 'bookmarks', labels: 'Billets' },
    { title: 'Mes favoris', url: 'folder/favoris', icon: 'star', labels: 'Favoris' },
    { title: 'Mes events', url: 'folder/my-events', icon: 'calendar', labels: 'Événements' },
    { title: 'Notifications', url: 'folder/notifications', icon: 'notifications', labels: 'Notifications' },
    { title: 'Mes invitations', url: 'folder/invitations', icon: 'folder-open', labels: 'Invitations' },
    { title: 'YaBi wallet', url: 'folder/wallet', icon: 'wallet', labels: 'Wallet' },
  ];
  public labels = ['Catégorie', 'Billets', 'Favoris', 'Invitations', 'Wallet', 'Historique'];
  constructor( private router: Router) {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.page.html',
  styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {
title = 'Invitations';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage() {
    this.router.navigate(['folder/home']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.component.html',
  styleUrls: ['./qr-generation.component.scss'],
})

export class QrGenerationComponent implements OnInit {
  qrLink = 'https://yabain.com';

  constructor() { }

  ngOnInit() {
  }

  save() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

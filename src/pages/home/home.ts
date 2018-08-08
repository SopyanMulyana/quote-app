import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  colors=["primary","secondary","danger","light","dark"];
  color="primary";
  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {

  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'About',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Dibuat oleh S.M bekerjasama dengan Kabim Unpad',
          // role: 'destructive',
          icon: 'brush',
          handler: () => {
            // console.log('Delete clicked');
          }
        },
        {
          text: 'Developing using IONIC Framework',
          icon: 'ionic',
          handler: () => {
            // console.log('Share clicked');
          }
        },
        {
          text: 'Back',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  setColor(){
    this.color = this.colors[2];
  }

}

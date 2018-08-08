import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController  } from 'ionic-angular';
import { AppHelper } from "../../app/app.helper";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  
  color;
  loader;
  index;
  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public appHelper: AppHelper,
    public loadingCtrl: LoadingController
  ){}

  ngOnInit(){
    console.log(this.appHelper.currentColor)
    this.color=this.appHelper.currentColor;
    this.index = this.appHelper.currentIndex;
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
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
    this.loader.present();
    this.appHelper.insertCurrentColor(2);
    this.color=this.appHelper.currentColor;
    this.loader.dismiss();
  }
  
  change(){
    let i: number = +this.index;
    this.appHelper.insertCurrentColor(i);
    this.color=this.appHelper.currentColor;
    this.index=this.appHelper.currentIndex;
  }

}

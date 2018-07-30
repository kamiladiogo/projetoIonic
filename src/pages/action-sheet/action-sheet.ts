import { Component } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl : ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  abrirActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          icon: 'cafe',
          text: 'Café da manhã',
          role: 'destructive',
          handler: () => {
            alert('Você escolheu a opção A');
          }
        },
        {
          icon: 'nutrition',
          text: 'Almoço e Janta',
          handler: () => {
            console.log('Archive clicked');
          }
        },
          {
            icon: 'ice-cream',
            text: 'Doces',
            handler: () => {
              console.log('Archive clicked');
            }
        },
        {
          icon: 'md-exit',
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
 }

import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  peso: number;
  altura: number;

  constructor(public alertaCtrl: AlertController) {
  
  }
calcular()
{
    
  const alerta = this.alertaCtrl.create
 (
    
    {
    title: 'IMC: ',
    subTitle: 'O seu IMC é: ' + ((this.peso * this.altura)/2),
    buttons: ['ok']
  });
  alerta.present();
}
}

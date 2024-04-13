import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.page.html',
  styleUrls: ['formulario.page.scss'],
})
export class FormularioPage {

  mesSeleccionado: string = '';
  anoSeleccionado: string = '';

  constructor(private navCtrl: NavController) {
    
  }

  irAHome() {
    this.navCtrl.navigateForward('/home'); // Navegar hacia la ruta de la página de inicio
  }

}



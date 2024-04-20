import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

interface Tarea {
  titulo: string;
  descripcion: string;
  fecha: string;
  mes: number;
  ano: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  title: string = "Mi App Tareas";
  descripcionTarea: string = ''; 

  mesSeleccionado: string | undefined;
  anoSeleccionado: string | undefined;

  tareas: Tarea[] = [];

  constructor() {}

  ngOnInit() {
    
  }

  openModal() {
    if (this.modal) {
      this.modal.present();
    }
  }

  cancel() {
    if (this.modal) {
      this.modal.dismiss(null, 'cancel');
    }
  }

  confirm() {
    if (this.modal) {
      if (!this.name || !this.descripcionTarea || !this.mesSeleccionado || !this.anoSeleccionado) {
        console.error('Todos los campos deben estar completos.');
        return;
      }

      const nuevaTarea: Tarea = {
        titulo: this.name,
        descripcion: this.descripcionTarea, 
        fecha: `${this.mesSeleccionado}/${this.anoSeleccionado}`,
        mes: parseInt(this.mesSeleccionado, 10), 
        ano: parseInt(this.anoSeleccionado, 10) 
      };

      this.tareas.push(nuevaTarea);

      this.name = '';
      this.descripcionTarea = '';
      this.mesSeleccionado = undefined;
      this.anoSeleccionado = undefined;

      this.modal.dismiss(null, 'confirm');
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}

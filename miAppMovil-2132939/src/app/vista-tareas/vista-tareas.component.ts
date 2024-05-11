import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { NuevasTareasService } from '../nuevas-tareas.service';
import {AgregarTareaComponent} from '../agregar-tarea/agregar-tarea.component'
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  mes: number;
  ano: number;
}

@Component({
  selector: 'app-vista-tareas',
  templateUrl: './vista-tareas.component.html',
  styleUrls: ['./vista-tareas.component.scss'],
})
export class VistaTareasComponent implements OnInit {

  @ViewChild(IonModal) modal: IonModal | undefined;

  title: string = "Mi App Tareas";
  tareas: Tarea[] = [];
  
  verDetalles(id: number) {
    // Aquí puedes navegar a la página vista-detalles pasando el ID de la tarea como parámetro
    this.router.navigate(['/vista-detalles', id]);
  }
  

  constructor(private nuevasTareasService: NuevasTareasService, private modalController: ModalController, private router: Router) {
   
   }

  ngOnInit() {
    this.obtenerTareas();
  }

  async obtenerTareas() {
    this.tareas = this.nuevasTareasService.obtenerTareas();
  }
  

  async openModal() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data && data.nuevaTarea) {
      this.tareas.push(data.nuevaTarea);
    }
  }

  onWillDismiss(event: any) {
    console.log('Modal se va a cerrar', event);
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
   
  }

  cerrarModal() {
    console.log('Cerrando modal');
    this.modalController.dismiss(); 
  }

  

  eliminarTarea(index: number) {
    this.nuevasTareasService.eliminarTarea(index);
  }
  
  
}

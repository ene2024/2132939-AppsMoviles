import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NuevasTareasService } from '../nuevas-tareas.service'; 

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  name: string = '';
  mesSeleccionado: string | undefined;
  anoSeleccionado: string | undefined;
  descripcionTarea: string = '';

  @Output() cancelarModal: EventEmitter<void> = new EventEmitter<void>();



  constructor(private nuevasTareasService: NuevasTareasService) { }

  ngOnInit(): void {
  }

  cancel() {
    console.log('Creación de tarea cancelada');
    this.cancelarModal.emit();
  }

  confirm() {
    if (!this.name || !this.descripcionTarea || !this.mesSeleccionado || !this.anoSeleccionado) {
      console.error('Todos los campos deben estar completos.');
      return;
    }

    const nuevaTarea = {
      titulo: this.name,
      descripcion: this.descripcionTarea,
      fecha: `${this.mesSeleccionado}/${this.anoSeleccionado}`,
      mes: parseInt(this.mesSeleccionado, 10),
      ano: parseInt(this.anoSeleccionado, 10)
    };

    this.nuevasTareasService.agregarTarea(nuevaTarea);

    this.name = '';
    this.descripcionTarea = '';
    this.mesSeleccionado = undefined;
    this.anoSeleccionado = undefined;

    console.log('Nueva tarea agregada:', nuevaTarea);
  }

}


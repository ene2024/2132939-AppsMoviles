import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevasTareasService {
  tareas: any[] = [];

  constructor() { }

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  eliminarTarea(index: number) {
    if (index >= 0 && index < this.tareas.length) {
      this.tareas.splice(index, 1);
    }
  }
}


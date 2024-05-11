import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NuevasTareasService } from '../nuevas-tareas.service';

@Component({
  selector: 'app-vista-detalles',
  templateUrl: './vista-detalles.page.html',
  styleUrls: ['./vista-detalles.page.scss'],
})
export class VistaDetallesPage implements OnInit {

  tarea: any;

  constructor(
    private route: ActivatedRoute,
    private nuevasTareasService: NuevasTareasService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const taskId = paramMap.get('id');
      if (taskId !== null) {
        const taskIdNumber = parseInt(taskId, 10); // Convertir taskId de string a number
        this.tarea = this.nuevasTareasService.obtenerTareaPorId(taskIdNumber);
      } else {
        console.error('No se proporcionó un ID de tarea en la URL.');
      }
    });
  }
  
  

}

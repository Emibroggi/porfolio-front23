import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionS.list().subscribe(data => {
      this.educacion = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe({
        next: data => {
          this.cargarEducacion();
        },
        error: err => {
          alert('No se pudo borrar la educacion');
        },
      });
    }
  }
}

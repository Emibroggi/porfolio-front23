import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.scss'],
})
export class NewEducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe({
      next: data => {
        alert('Educacion añadida');
        this.router.navigate(['home']);
      },
      error: err => {
        alert('Falló');
        this.router.navigate(['home']);
      },
    });
  }
}

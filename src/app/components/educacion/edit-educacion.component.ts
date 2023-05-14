import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.scss'],
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe({
      next: data => {
        this.educacion = data;
      },
      error: err => {
        alert('Error al modificar educacion');
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe({
      next: data => {
        this.router.navigate(['']);
      },
      error: err => {
        alert('Error al modificar educacion');
        this.router.navigate(['']);
      },
    });
  }
}

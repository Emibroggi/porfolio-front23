import { Component, OnDestroy, OnInit } from '@angular/core';
import { experience } from 'src/app/model/experience';
import { sExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  expe: experience[] = [];
  constructor(private sExperience: sExperienceService) {}

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.sExperience.lista().subscribe(data => {
      this.expe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperience.delete(id).subscribe({
        next: data => {
          this.cargarExperiencia();
        },
        error: err => {
          alert('No se pudo borrar la exp');
        },
      });
    }
  }
}

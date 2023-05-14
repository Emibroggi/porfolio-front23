import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experience } from 'src/app/model/experience';
import { sExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.scss'],
})
export class NewExperienceComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private sExperience: sExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new experience(this.nombreE, this.descripcionE);
    this.sExperience.save(expe).subscribe({
      next: data => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      error: err => {
        alert('Falló');
        this.router.navigate(['']);
      },
    });
  }
}

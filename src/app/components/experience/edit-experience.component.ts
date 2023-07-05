import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experience } from 'src/app/model/experience';
import { sExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss'],
})
export class EditExperienceComponent implements OnInit {
  expLab: experience = null;

  constructor(
    private sExperience: sExperienceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperience.detail(id).subscribe({
      next: data => {
        this.expLab = data;
      },
      error: err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperience.update(id, this.expLab).subscribe({
      next: data => {
        this.router.navigate(['/home']);
      },
      error: err => {
        alert('Error al modificar experienciaa');
        this.router.navigate(['/home']);
      },
    });
  }
}

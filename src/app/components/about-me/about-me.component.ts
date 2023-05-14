import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/person.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  persona: persona = new persona(1, '', '', '', '', '', '', '', '');

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.getPerson().subscribe(data => {
      this.persona = data;
    });
  }
}

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

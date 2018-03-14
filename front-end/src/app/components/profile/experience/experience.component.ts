import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showExpModal() {
    const experience = document.querySelector('#experience-popup');
    experience.setAttribute('style', 'display:flex; align-items:center;');
    }
}

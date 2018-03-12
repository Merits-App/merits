import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // Properties

  // Methods
  constructor() { }

  ngOnInit() {

  }

  showModal() {

    const skillsPopup = document.querySelector('#skills-popup');

    skillsPopup.setAttribute('style', 'display:flex; align-items:center;');
  }

}


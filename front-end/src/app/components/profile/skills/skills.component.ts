import { Component, OnInit } from '@angular/core';
import { SkillsPopupComponent } from './skills-popup/skills-popup.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // Properties
  // skills = SkillsPopupComponent().skills;
  // Methods
  constructor() { }

  ngOnInit() {
    console.log(SkillsPopupComponent);
  }

  showModal() {

    const skillsPopup = document.querySelector('#skills-popup');

    skillsPopup.setAttribute('style', 'display:flex; align-items:center;');
  }

}


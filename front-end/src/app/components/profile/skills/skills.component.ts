import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 showModal(){
    var skillsPopup = document.querySelector('#skills-popup');
    
    skillsPopup.setAttribute("style", "display:flex; align-items:center;");
    console.log('works');
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideModal(){
    var skillsPopup = document.querySelector('#skills-popup');
    
    skillsPopup.setAttribute("style", "display:none");
    console.log('works');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // Properties

  show = false;

  // Methods
  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.show = !this.show;
  }

  showModal(){
    var skillsPopup = document.querySelector('#projects-popup');
    
    skillsPopup.setAttribute("style", "display:flex; align-items:center;");
    console.log('works');
  }

}

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

  // Toggle Overlay
  toggle() {
    this.show = !this.show;
  }

  //Function for showing the pop up modal
  showModal(){
    var skillsPopup = document.querySelector('#projects-popup');
    
    skillsPopup.setAttribute("style", "display:flex; align-items:center;");
    console.log('works');
  }

}

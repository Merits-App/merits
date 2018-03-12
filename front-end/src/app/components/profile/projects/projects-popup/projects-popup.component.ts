import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-popup',
  templateUrl: './projects-popup.component.html',
  styleUrls: ['./projects-popup.component.css']
})
export class ProjectsPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideProjectsModal(){
    var projectsPopup = document.querySelector('#projects-popup');
    
    projectsPopup.setAttribute("style", "display:none");
    console.log('works');
  }

}

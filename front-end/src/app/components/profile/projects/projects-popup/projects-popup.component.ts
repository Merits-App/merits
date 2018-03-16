import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-popup',
  templateUrl: './projects-popup.component.html',
  styleUrls: ['./projects-popup.component.css']
})
export class ProjectsPopupComponent implements OnInit {
  projectImg = null;

  constructor() { }

  ngOnInit() {
  }
  hideProjectsModal(){
    var projectsPopup = document.querySelector('#projects-popup');
    
    projectsPopup.setAttribute("style", "display:none");
    console.log('works');
  }

  onFileSelected(event){
    this.projectImg = event.target.files[0];
    console.log(this.projectImg);

    var imgBackground = document.querySelector('.add-img');

    imgBackground.setAttribute("style", "background: url(this.projectImg)");
  }
}

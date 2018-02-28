import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (function showInfo() {
      const projects = document.querySelectorAll('.placeholder');
      for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('mouseover', (e) => {
          e.srcElement.children[1].classList.add('show');
          e.srcElement.children[1].classList.remove('hide');
          console.log('enter', e);
        });
        projects[i].addEventListener('mouseleave', (e) => {
          e.srcElement.children[1].classList.add('hide');
          e.srcElement.children[1].classList.remove('show');
          console.log('leave', e);
        });
      }
    }());
  }

}

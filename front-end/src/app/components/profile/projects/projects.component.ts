import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // Properties

  // Methods
  constructor() { }

  ngOnInit() {

  }

  show($event) {
    // e.srcElement.children[1].classList.add('show');
    // e.srcElement.children[1].classList.remove('hide');
    console.log('show');
  }

  hide($event) {
    // e.srcElement.children[1].classList.add('show');
    // e.srcElement.children[1].classList.remove('hide');
    console.log('hide');
  }

}

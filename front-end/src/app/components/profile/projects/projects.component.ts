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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showEduModal() {
    const eduPopup = document.querySelector('#education-popup');
    eduPopup.setAttribute('style', 'display:flex; align-items:center;');
    }
}

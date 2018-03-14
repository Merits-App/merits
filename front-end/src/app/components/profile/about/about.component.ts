import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showAboutModal() {
    const aboutPopup = document.querySelector('#about-popup');
    aboutPopup.setAttribute('style', 'display:flex; align-items:center;');
    }
}

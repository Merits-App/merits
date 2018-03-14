import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-popup',
  templateUrl: './about-popup.component.html',
  styleUrls: ['./about-popup.component.css']
})
export class AboutPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideAboutModal() {
    const achievePopup = document.querySelector('#about-popup');
    achievePopup.setAttribute("style", "display:none");
  }
}

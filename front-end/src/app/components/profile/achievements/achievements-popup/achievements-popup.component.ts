import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'achievements-popup',
  templateUrl: './achievements-popup.component.html',
  styleUrls: ['./achievements-popup.component.css']
})
export class AchievementsPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideAchieveModal(){
    const achievePopup = document.querySelector('#achieve-popup');
    achievePopup.setAttribute("style", "display:none");
  }
}

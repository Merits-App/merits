import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showAchieveModal() {
    const achievePopup = document.querySelector('#achieve-popup');
    achievePopup.setAttribute('style', 'display:flex; align-items:center;');
    }
}

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
    const achievePopup = document.querySelector('#achieve-newPopup');
    achievePopup.setAttribute('style', 'display:flex; align-items:center;');
    // const achievehidePopup = document.querySelector('#achieve-editPopup');
    // achievehidePopup.setAttribute("style", "display:none");
    }
    showAchieveEditModal() {
      const achieveEditPopup = document.querySelector('#achieve-editPopup');
      achieveEditPopup.setAttribute('style', 'display:flex; align-items:center;');
      // const achievehidePopup = document.querySelector('#achieve-newPopup');
      // achievehidePopup.setAttribute("style", "display:none");
    }
  }

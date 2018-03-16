import { Component, OnInit } from "@angular/core";

@Component({
  selector: "achievements-popup",
  templateUrl: "./achievements-popup.component.html",
  styleUrls: ["./achievements-popup.component.css"]
})
export class AchievementsPopupComponent implements OnInit {
  // awardTitle = String;
  awardTitle = "Boo Brilliant Designer";
  awardYear = String;
  constructor() {}
  updateOnSuccess = false;
  ngOnInit() {}
  hideAchieveModal() {
    const achievePopup = document.querySelector("#achieve-newPopup");
    achievePopup.setAttribute("style", "display:none");
    const achieveEditPopup = document.querySelector("#achieve-editPopup");
    achieveEditPopup.setAttribute("style", "display:none");
  }
  
  update() {
    const updateAchievements = {
      AwardTitle: this.awardTitle
      // AwardMonth: this.awardMonth
    };
  }
}

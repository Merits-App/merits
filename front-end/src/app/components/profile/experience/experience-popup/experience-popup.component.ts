import { Component, OnInit } from "@angular/core";

@Component({
  selector: "experience-popup",
  templateUrl: "./experience-popup.component.html",
  styleUrls: ["./experience-popup.component.css"]
})
export class ExperiencePopupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  hideExpModal() {
    var experiencePopup = document.querySelector("#experience-popup");
    experiencePopup.setAttribute("style", "display:none");
  }
}

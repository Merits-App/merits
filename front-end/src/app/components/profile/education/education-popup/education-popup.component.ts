import { Component, OnInit } from "@angular/core";

@Component({
  selector: "education-popup",
  templateUrl: "./education-popup.component.html",
  styleUrls: ["./education-popup.component.css"]
})
export class EducationPopupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // hideEduModal
  hideEduModal() {
    const eduPopup = document.querySelector("#education-popup");
    eduPopup.setAttribute("style", "display:none");
    const eduEditPopup = document.querySelector("#education-editPopup");
    eduEditPopup.setAttribute("style", "display:none");
  }
}


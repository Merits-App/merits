import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {
  newSkill = '';
  newSkillCreated = false;

  constructor() { }

  //grabs any value inside of form
  onSubmit(value:any) {
    this.newSkill = value;
    console.log(this.newSkill);

    this.newSkillCreated = true;
  }

  ngOnInit() {
  }

  //Function for hiding the pop up modal
  hideModal(){
    var skillsPopup = document.querySelector('#skills-popup');
    
    skillsPopup.setAttribute("style", "display:none");
    console.log('works');
  }
}

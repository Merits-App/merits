import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {
  // newSkill = '';
  // newSkillCreated = false;

  skills = [ ];

  constructor(private http: Http) { }

  //grabs any value inside of form
  onSubmit(value:any) {
    // this.newSkill = value;
    this.skills.push(value);
    console.log(this.skills);

    const skills = new FormData();
    skills.append('skillsArray', value)
    this.http.post('mongo ds213209.mlab.com:13209/merits -u meritsadmin -p password', skills).subscribe(res => {
      console.log(res);
    })
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

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newSkill: User["skills"];

  constructor() { }

  ngOnInit() {
    console.log('The profile page is connected to the routes.');
    this.newSkill = { languages: '', otherSkills: ''};
  }
  
  onSubmit(){

  }

  hideModal(){
    var popup = document.querySelector('.popup-bg');
    
    popup.setAttribute("style", "display: none");
    console.log('works');
  }
}
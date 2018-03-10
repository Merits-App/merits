import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 showModal(){
    var popup = document.querySelector('.popup-bg');
    
    popup.setAttribute("style", "display: block");
    console.log('works');
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('The profile page is connected to the routes.');
  }
  showModal(){
    // var popup = document.querySelector('.popup-bg');
    
    // popup.setAttribute("style", "display: block");
    console.log('works');
  }
}
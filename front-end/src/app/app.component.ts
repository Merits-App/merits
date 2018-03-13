import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';

// Link to our api, pointing to localhost
  API = 'http://localhost:3000';

//   // Declare empty list of people

//   persons: any [] = [];

//   constructor(private http: Http) {}

//   // Angular life cycle

   ngOnInit() {

//     this.getAllPersons();
//   }

//   // Add one person to the API
//   addPerson(name, email) {
//     this.http.post(`${this.API}/users`, {name, email})
//       .map(res => res.json())
//       .subscribe(() => {
//         this.getAllPersons();
//       })
    
//     }

//   // Get all persons from API
//   getAllPersons () {
//     this.http.get(`${this.API}/users`)
//       .map(res => res.json())
//       .subscribe(persons => {
//         console.log(persons)
//         this.persons = persons
//       })

//     }
//   }
   }
  }
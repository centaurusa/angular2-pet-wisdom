import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apts = [
    {
      "petName" : "Tierra",
      "ownerName" : "John Smith",
      "aptDate" : "2016-06-20 15:30",
      "aptNotes" : "This cat has not eaten for three days and is lethargic"
    },
    {
      "petName" : "Spot",
      "ownerName" : "Alex Colman",
      "aptDate" : "2016-06-24 08:30",
      "aptNotes" : "The German Shepherd is having some back pain"
    },
    {
      "petName" : "Foxy",
      "ownerName" : "Dmitry Shumsky",
      "aptDate" : "2016-06-24 15:50",
      "aptNotes" : "This Goldfish has some weird spots in the belly"
    },
    {
      "petName" : "RonRon",
      "ownerName" : "Ann Goldman",
      "aptDate" : "2016-06-21 09:15",
      "aptNotes" : "This cat has not eaten for three days and is lethargic"
    },
    {
      "petName" : "Nicol",
      "ownerName" : "Jon Koppenhaver",
      "aptDate" : "2016-06-19 10:45",
      "aptNotes" : "Some lack of appetite"
    },
    {
      "petName" : "Rat",
      "ownerName" : "Jon Koppenhaver",
      "aptDate" : "2016-06-19 10:45",
      "aptNotes" : "Some lack of appetite"
    }
  ];

}

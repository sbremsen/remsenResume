import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-home-tiles',
  templateUrl: './home-tiles.component.html',
  styleUrls: ['./home-tiles.component.scss']
})
export class HomeTilesComponent implements OnInit {
  public tiles: Card[] = [];

  public animatedStyle = 'fadeInRight';
  constructor() { }

  ngOnInit() {
    this.populateHomePage();
    console.log(this.tiles);
  }

  populateHomePage() {
   // debugger;
    this.tiles.push(
      {
      title: 'Front End Web Design',
      photoUrl: 'https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg',
      description: 'Angular, Node JS, Google Firebase, NoSQL',
      animatedStyle : 'fadeInRight'
    })
    ;
    this.tiles.push({
      title: 'Microsoft Certified Solutions Developer',
      photoUrl: 'https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg',
      description: 'Software Engineering, Business Analysis, Requirements Gathering, Resource Management, AGILE SDLC',
      animatedStyle : 'fadeInRight'
    });
  }

}

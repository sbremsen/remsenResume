import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card';
import { AnimationAction } from  '../models/enum';

@Component({
  selector: 'app-home-tiles',
  templateUrl: './home-tiles.component.html',
  styleUrls: ['./home-tiles.component.scss']
})
export class HomeTilesComponent implements OnInit {
  public tiles: Card[] = [];
  @Input() loadAboutPage = false;
  public animatedStyle = 'fadeInRight';

  constructor() { }

  ngOnInit() {
   // debugger;
    if (this.loadAboutPage) {
      this.populateAboutPage();
    } else {
      this.populateHomePage();
    }

    console.log(this.tiles);
  }

  populateAboutPage() {
    this.tiles.push(
      {
      title: 'Angular Boostrap Website',
      photoUrl: '../../assets/img/bg3_Utah_Statue.jpg',
      description: 'Angular, Node JS, Google Firebase, NoSQL',
      animatedStyle : AnimationAction.FadeRight //'fadeInRight'
    });
    this.tiles.push({
      title: 'Remsen Music Forum',
      photoUrl: 'https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg',
      description: 'UI design template using Responsive Design for smooth rendering among devices.  This is hosted on Google Firebase.',
      siteUrl: 'https://remsen-templates.web.app/',
      animatedStyle : AnimationAction.SlideUp //'fadeInRight'
    });
  }

  populateHomePage() {
   // debugger;
    this.tiles.push(
      {
      title: 'Front End Web Design',
      photoUrl: 'https://mdbootstrap.com/img/Photos/Others/images/49.jpg',
      description: 'Angular, Node JS, Google Firebase, NoSQL',
      animatedStyle : AnimationAction.SlideUp
    });
    this.tiles.push({
      title: 'Remsen Music Forum',
      photoUrl: 'https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg',
      description: 'UI design template using Responsive Design for smooth rendering among devices.  This is hosted on Google Firebase.',
      siteUrl: 'https://remsen-templates.web.app/',
      animatedStyle : AnimationAction.ZoomInRight
    });
    // this.tiles.push({
    //   title: 'Microsoft Certified Solutions Developer',
    //   photoUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(7).jpg',
    //   description: 'Music Study, Piano Study, Golfing, Technology Consultant',
    //   animatedStyle : 'fadeInUp'
    // });
    //
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'Scott Remsen';
  public header = 'Solutions Developer / Purveyor of Good Vibes'
  public description = 'Thank you for viewing this website.  Please view my Portfolio and enjoy checking out some of the components displayed on the Components screen. '
  + 'These components utilize Angular and data feeds from Restful Web API.';

  constructor() { }

  ngOnInit() {

  }

}

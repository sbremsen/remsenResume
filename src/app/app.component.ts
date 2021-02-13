import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';

export interface Schedule {
  id?: string;
  time: string;
  subject: string;
  location?: string;
  description?: string;
}
declare var tinymce: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable ' +
      'and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];

  public items: Array<any> = [
    { text: 'Card 1' },
    { text: 'Card 2' },
    { text: 'Card 3' },
    { text: 'Card 4' },
    { text: 'Card 5' },
    { text: 'Card 6' },
    { text: 'Card 7' },
    { text: 'Card 8' },
    { text: 'Card 9' },
    { text: 'Card 10' }
  ];

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  handleDeleteClick() {
    console.log("Delete button clicked!");
  }
}

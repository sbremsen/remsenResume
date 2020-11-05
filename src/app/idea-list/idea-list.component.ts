import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import { CardData } from '../models/cardData';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
 // @ViewChild() modal: ModalDirective;
  name = '';
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable ' +
      'and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];

  constructor() {

  }

  ngOnInit() {
    //on init
  }

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  }

  changeName(){
    this.name = "Johny";
  }
}


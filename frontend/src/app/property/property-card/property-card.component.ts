import { Component } from '@angular/core';

@Component({
  selector:'app-property-card',

  templateUrl:'property-card.component.html' ,

  styleUrls:['property-card.component.css']


})
export class propertycardcomponent{
  property: any ={

    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "price":12000
  }

}

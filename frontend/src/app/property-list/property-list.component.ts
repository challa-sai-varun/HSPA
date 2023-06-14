import { IProperty } from './../property/property-card/IProperty.interface';
import { HousingService } from './../services/housing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: Array<IProperty>;

  constructor(private housingproperties:HousingService) { }

  ngOnInit() : void{
    this.housingproperties.getAllProperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      },error=>{
        console.log('httperror:');
        console.log(error);
      }
    );


    }

  }



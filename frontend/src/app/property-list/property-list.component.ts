import { ActivatedRoute } from '@angular/router';
import { IProperty } from './../property/property-card/IProperty.interface';
import { HousingService } from './../services/housing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties!: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingproperties:HousingService) { }

  ngOnInit() : void{
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingproperties.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString)
      },error=>{
        console.log('httperror:');
        console.log(error);
      }
    );


    }

  }



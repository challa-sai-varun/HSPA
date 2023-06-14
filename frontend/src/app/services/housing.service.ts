import { IProperty } from './../property/property-card/IProperty.interface';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('Data/listofhouse.json').pipe(
      map((data:any)=>{
        const propertiesarray : Array<IProperty> = [];
        for (const id in data)
        {
          if(data.hasOwnProperty(id)){

            propertiesarray.push(data[id]);
          }
        }
        return propertiesarray;

        })

      );

  }
}

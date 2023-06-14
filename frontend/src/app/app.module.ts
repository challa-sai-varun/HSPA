import { AddPropertyComponent } from './property/property-card/add-property/add-property.component';
import { HousingService } from './services/housing.service';
import { propertycardcomponent } from './property/property-card/property-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const approutes: Routes=[
  {path:'', component: PropertyListComponent},
  {path:'rent-property', component: PropertyListComponent},
  {path:'property-detail', component: PropertyDetailComponent},
  {path:'add-property', component: AddPropertyComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    propertycardcomponent,
     NavBarComponent,
     PropertyListComponent,
     AddPropertyComponent,
     PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

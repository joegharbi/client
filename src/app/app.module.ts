import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PetsListPageComponent } from './pets-list-page/pets-list-page.component';
import { EditPetPageComponent } from './edit-pet-page/edit-pet-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetFormComponent } from './pet-form/pet-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    AboutPageComponent,
    PetsListPageComponent,
    EditPetPageComponent,
    PetFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { PetsListPageComponent } from "./pets-list-page/pets-list-page.component";
import { EditPetPageComponent } from "./edit-pet-page/edit-pet-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "pets",
    component: PetsListPageComponent
  },
  {
    path: "pets/new",
    component: EditPetPageComponent
  },
  {
    path: "pets/:id",
    component: EditPetPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets-list-page',
  templateUrl: './pets-list-page.component.html',
  styleUrls: ['./pets-list-page.component.css']
})
export class PetsListPageComponent implements OnInit {

  public pets: Pet[] = [];
  constructor(
    private petService: PetService
  ) { }

  async ngOnInit() {
    this.pets = await this.petService.getPets()
  }

}

import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  num_pets = 0
  dead = 0
  constructor(
    private petService: PetService
  ) { }

  async ngOnInit() {
    this.num_pets = await this.petService.allPets()
    this.dead = await this.petService.deadPets()
  }

}

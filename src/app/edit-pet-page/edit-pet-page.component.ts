import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-edit-pet-page',
  templateUrl: './edit-pet-page.component.html',
  styleUrls: ['./edit-pet-page.component.css']
})
export class EditPetPageComponent implements OnInit {

  pet = new Pet()

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const id = parseInt(urlId);
      const pet = this.petService.getPet(id);
      if (pet) {
        this.pet = pet;
      }
    }
  }

  async handleSave(pet: Pet) {

    if (this.pet.id) {
      this.petService.updatePet(this.pet.id, pet);
      this.router.navigate(['/pets']);
    }
    else {
      await this.petService.addPet(pet);
      this.router.navigate(['/pets']);
    }
  }

}

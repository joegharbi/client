import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pet } from './pet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petUrl = 'http://localhost:8000/api/pets';


  constructor(
    private http: HttpClient
  ) { }

  async getPets() {
    return await lastValueFrom(this.http.get<Pet[]>(this.petUrl));
  }

  async getPet(id: number) {
    return await lastValueFrom(this.http.get<Pet>(`${this.petUrl}/${id}`));
  }

  async updatePet(id: number, modifiedPet: Pet) {
    return await lastValueFrom(this.http.patch<Pet>(`${this.petUrl}/${id}`, modifiedPet, httpOptions));
  }

  async addPet(newPet: Pet) {
    return await lastValueFrom(this.http.post<Pet>(this.petUrl, newPet, httpOptions));
  }

  async allPets() {
    return (await this.getPets()).length;
  }

  async deadPets() {
    const pets = await this.getPets();
    return pets.filter(pet => pet.death_date).length
  }

}

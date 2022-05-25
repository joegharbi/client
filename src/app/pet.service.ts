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
  private pets: Pet[] = [
    { id: 1, name: 'Pet1', birth_date: '2022-10-19', death_date: '2022-01-20', species: 'cat', note: 'nothing' },
    { id: 2, name: 'Pet2', birth_date: '2002-12-20', death_date: '', species: 'cat', note: 'nothing' },
    { id: 3, name: 'Pet3', birth_date: '2012-12-22', death_date: '2020-12-20', species: 'cat', note: 'nothing' },
    { id: 4, name: 'Pet4', birth_date: '2012-11-22', death_date: '2020-09-20', species: 'cat', note: 'nothing' }
  ];
  private petUrl = 'http://localhost:8000/api/pets';

  constructor(
    private http: HttpClient
  ) { }

  async getPets() {
    return await lastValueFrom(this.http.get<Pet[]>(this.petUrl));
  }

  getPet(id: number) { return this.pets.find(pet => pet.id === id); }

  updatePet(id: number, modifiedPet: Pet) {
    const pet = this.getPet(id)
    Object.assign(pet, modifiedPet)
    return pet;
  }

  async addPet(newPet: Pet) {
    return await lastValueFrom(this.http.post<Pet>(this.petUrl, newPet, httpOptions));
  }

}

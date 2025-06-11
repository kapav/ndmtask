import { Injectable } from '@angular/core';
import { Itinerary } from '../interfaces/itinerary.interface';
import { Itineraries } from '../mocks/itineraries.mock';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private itineraries!: Itinerary[];

  constructor() {
    this.itineraries = Itineraries;
  }

  getAll(): Itinerary[] {
    return this.itineraries;
  }
}

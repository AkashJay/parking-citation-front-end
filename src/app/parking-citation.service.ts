import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingCitationService {

  url: string;

  constructor(private http: HttpClient) { }

  public getViolationsByRoute() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/112.csv';
    return this.http.get(this.url);
  }

  public getViolations() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/topViolations1.csv';
    return this.http.get(this.url);
  }

  public getFineTotal() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/fine.csv';
    return this.http.get(this.url);
  }
}

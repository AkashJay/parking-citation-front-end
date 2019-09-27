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
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/newa.csv';
    return this.http.get(this.url);
  }

  public getViolationsByCar() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/carN.csv';
    return this.http.get(this.url);
  }

  public getViolationsByCarTypeColr() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/cc.csv';
    return this.http.get(this.url);
  }

  public getFineTotal() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/finaloutput/fineCollectedInMillion.csv';
    return this.http.get(this.url);
  }

  public getYearFifteenTotalRec() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/finaloutput/yearFifteen.csv';
    return this.http.get(this.url);
  }

  public getYearSeventeenTotalRec() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/finaloutput/yeaeSeventyeen.csv';
    return this.http.get(this.url);
  }

  public getTotalRec() {
    this.url = 'http://dutugemunucollege.com/AkashJ/?source=http://dutugemunucollege.com/AkashJ/test/finaloutput/totalRecord.csv';
    return this.http.get(this.url);
  }
}

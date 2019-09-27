import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';
import {ParkingCitationService} from './parking-citation.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  width1 = 560;
  height1 = 400;
  type1 = 'heatmap';
  dataFormat1 = 'json';
  dataSource1;

  widthType = 560;
  heightType = 400;
  typeType = 'doughnut2d';
  dataFormatType = 'json';
  dataSourceType ;

  widthC = 560;
  heightC = 400;
  typeC = 'pie2d';
  dataFormatC = 'json';
  dataSourceC;

  width = 560;
  height = 400;
  type = 'bar2d';
  dataFormat = 'json';
  dataSource;

  result: any = [];
  result1: any = [];
  data;
  carData;
  fineAmmount;
  yearFIfteenRec;
  yearSeventeenRec;
  totalRec;
  data11;
  carColorData;

  public getData = true;

  constructor(private dataService: ParkingCitationService) {
    // this.getTopViolationsByRoute();
    this.getTopVio();
    // this.getByCarModel();
    // this.getByCarColor();
    // this.getFine();
    // this.getFifteenRec();
    // this.getSeventeenRec();
    // this.getTotalRec();



  }


  ngOnInit() {
  }
  public getTopVio() {


  }


  public getByCarModel() {


    if (this.getData) {
      this.dataService.getViolationsByCar().subscribe(response => {
        console.log(response);
        this.result = response;
        this.result.pop();
        this.carData.data = this.result;
      });
    }
    this.carData = {
      chart: {
        caption: 'Top 10 Violations By Car Type',
        plottooltext: '<b>$percentValue</b> of violations by $label',
        showlegend: '1',
        showpercentvalues: '1',
        legendposition: 'bottom',
        usedataplotcolorforlabels: '1',
        theme: 'candy'
      },
      data: this.result
    };
    this.dataSourceC = this.carData;

  }



  public getByCarColor() {


    if (this.getData) {
      this.dataService.getViolationsByCarTypeColr().subscribe(response => {
        console.log(response);
        this.result = response;
        this.result.pop();
        this.carColorData.data = this.result;
      });
    }
    this.carColorData = {
      chart: {
        caption: 'Grey Toyota aren\'t Parked well !',
        subcaption: 'Top 5 By Car Color ',
        showpercentvalues: '1',
        defaultcenterlabel: 'Parking Citations',
        aligncaptionwithcanvas: '0',
        captionpadding: '0',
        decimals: '1',
        plottooltext:
          '<b>$percentValue</b> of violations are by  <b>$label</b>',
        centerlabel: '# Citations: $value',
        theme: 'candy'
      },
      data: this.result
    };
    this.dataSourceType = this.carColorData;

  }


  public getTopViolationsByRoute() {
    if (this.getData) {
      this.dataService.getViolationsByRoute().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.result.pop();
        this.data.data = this.result;
      });
    }
    this.data = {
      chart: {
        caption: 'Top 10 By Route Number',
        yaxisname: 'Number of Violations',
        aligncaptionwithcanvas: '0',
        plottooltext: '<p><b>Number Of Records</b> : $dataValue</p>',
        theme: 'candy'
      },
      data: this.result
    };
    this.dataSource = this.data;
  }

  public getFine() {
    if (this.getData) {
      this.dataService.getFineTotal().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.fineAmmount = this.result[0].socre;
      });
    }
  }

  public getFifteenRec() {
    if (this.getData) {
      this.dataService.getYearFifteenTotalRec().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.yearFIfteenRec = this.result[0].totalRecord15;
      });
    }
  }
  public getSeventeenRec() {
    if (this.getData) {
      this.dataService.getYearSeventeenTotalRec().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.yearSeventeenRec = this.result[0].totalRecord17;
      });
    }
  }
  public getTotalRec() {
    if (this.getData) {
      this.dataService.getTotalRec().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.totalRec = this.result[0].totalRecord;
      });
    }
  }



}

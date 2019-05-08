import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';
import {ParkingCitationService} from './parking-citation.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  width1 = 600;
  height1 = 400;
  type1 = 'heatmap';
  dataFormat1 = 'json';
  dataSource1;

  width = 600;
  height = 400;
  type = 'bar2d';
  dataFormat = 'json';
  dataSource;
  result: any = [];
  result1: any = [];
  data;
  fineAmmount;
  data11;
  aaak;

  public getData = true;

  constructor(private dataService: ParkingCitationService) {
    this.getTopViolationsByRoute();
    this.getFine();
    this.getTopVio();
  }


  ngOnInit() {
  }
  public getTopVio() {

    if (this.getData) {

      this.dataService.getViolations().subscribe(response => {
        this.result1 = response;
        this.result1.pop();

        this.data11.dataset.forEach(a => {
          a.data = this.result1;
        });
      });

    }

    this.data11 = {
      colorrange: {
        gradient: '1',
        minvalue: '0',
        startlabel: 'Poor',
        endlabel: 'Outstanding'
      },
      dataset: [
        {
          data: this.result1
        }
      ],
      chart: {
        theme: 'fusion',
        caption: 'Distribution of Marks for Students',
        subcaption: 'Bell Curve Grading',
        xaxisname: 'Subjects',
        yaxisname: 'Student Name',
        showvalues: '1',
        valuefontcolor: '#ffffff',
        plottooltext: '$rowlabel\'s $columnlabel grading score: <b>$value</b>'
      }
    };

    this.dataSource1 = this.data11;
  }


  public getTopViolationsByRoute() {
    if (this.getData) {
      this.dataService.getViolationsByRoute().subscribe(response => {
        // console.log(response);
        this.result = response;
        this.result.pop()
        this.data.data = this.result;
      });
    }
    this.data = {
      chart: {
        caption: 'Top 10 By Route Number',
        yaxisname: 'Number of Violations',
        aligncaptionwithcanvas: '0',
        plottooltext: '<p><b>Number Of Records</b> : $dataValue</p>',
        theme: 'fusion'
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



}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Observable, interval, timer } from 'rxjs';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/operators';

const USER_DATA = [
  {position: 1, name: 'Jane Doe', location: 'Durham', age: '34'},
  {position: 2, name: 'Josh	Garrett', location: 'Milwaukee', age: '54'},
  {position: 3, name: 'Blanche	Mcdaniel', location: 'Huntington', age: '23'},
  {position: 4, name: 'Jacob	Murphy', location: 'Los Angeles', age: '30'},
  {position: 5, name: 'Orlando	Ellis', location: 'Plano', age: '20'}
];

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  displayedColumns: string[] = ['position', 'name', 'location', 'age'];
  dataSource = USER_DATA;
  public value$: Observable<number>;


  public constructor(private titleService:Title){
    this.titleService.setTitle("Dashboard");
  }

  public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
    public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    //public barChartPlugins = [pluginDataLabels];
//            [plugins]="barChartPlugins"

    public barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

    ngOnInit() {
      this.value$ = interval(1000).pipe(
        map(() => Math.random() * 120)
      );
    }

}
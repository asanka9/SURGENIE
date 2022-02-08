import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {



  @Input() labels:   any;
  @Input() data:   any;


  constructor() { }

  title = 'charts-app';
  ngOnInit() {
    Chart.register(...registerables);

    var bar = new Chart("bar", {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              label: 'Minutes',
              data: this.data,
              backgroundColor: [
                '#99e2b4',
                '#88d4ab',
                '#78c6a3',
                '#67b99a',
                '#56ab91',
                '#469d89',
                '#358f80',
                '#248277',
                '#14746f',
                '#036666'
              ],
              borderColor: [
                '#99e2b4',
                '#88d4ab',
                '#78c6a3',
                '#67b99a',
                '#56ab91',
                '#469d89',
                '#358f80',
                '#248277',
                '#14746f',
                '#036666'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            
          }
        }
      }
  });
  }
}

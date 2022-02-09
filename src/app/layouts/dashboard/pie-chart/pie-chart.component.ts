import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {


  @Input() labels:   any;
  @Input() data:   any;



  constructor() { }
  title = 'charts-app';
  ngOnInit() {
    Chart.register(...registerables);
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'My First Dataset',
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
          
        },
      }
      }
    });
  }

}

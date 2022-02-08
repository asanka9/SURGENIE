import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() labels:   any;
  @Input() data:   any;

  constructor() { }

  title = 'charts-app';
  ngOnInit() {
    Chart.register(...registerables);
    var myChart = new Chart("line", {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: '',
          data: this.data,
          borderColor: 'rgb(75, 192, 192)',
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

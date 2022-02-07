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
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'My First Dataset',
          data: this.data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 255, 86)'

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
          
        }
      }
      }
    });
  }

}

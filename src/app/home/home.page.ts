import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart', { static: true }) barChart;
  @ViewChild('barChart1', { static: true }) barChart1;
  @ViewChild('hrzBarChart', { static: true }) hrzBarChart;

  bars: any;
  hrzBars: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
    this.createBarChart1();
    this.plotSimplePieChart();
    this.createHrzBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
        datasets: [{
          label: 'Consumo de ração tipo A',
          data: [2.5, 3.8, 5, 6.9, 7.9  ],
          backgroundColor: 'rgb(38, 194, 129)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderColor: 'rgb(38, 194, 129)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderWidth: 1
        },
        {
          label: 'Consumo de ração tipo B',
          data: [2.9, 4.2, 4.9, 5.9, 7.2  ],
          backgroundColor: 'rgb(50,205,50)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderColor: 'rgb(50,205,50)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  createBarChart1() {
    this.bars = new Chart(this.barChart1.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
        datasets: [{
          label: 'Consumo de ração tipo A',
          data: [1.5, 3.8, 5, 6.9, 7.9  ],
          backgroundColor: 'rgb(165,42,42)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderColor: 'rgb(165,42,42)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderWidth: 1
        },
        {
          label: 'Consumo de ração tipo B',
          data: [1.9, 2.2, 5.9, 6.3, 9.2  ],
          backgroundColor: 'rgb(233,150,122)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderColor: 'rgb(233,150,122)', // matriz deve ter o mesmo número de elementos que o número do conjunto de dados
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  plotSimplePieChart() {
    let myChart = HighCharts.chart('simplePie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },title: {
        text: 'Consumo de Ração'
      },
      series: [{
        name: 'Ração',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Ração tipo A',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Ração tipo B',
          y: 38.69
        }]
      }]
    });
  }
  createHrzBarChart() {
    this.hrzBars = new Chart(this.hrzBarChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
        datasets: [{
          label: 'Consumo no curral nº1',
          data: [38, 42, 53, 69, 72],
          backgroundColor: 'rgb(138,43,226)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(138,43,226)', // array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Consumo no curral nº2',
          data: [32, 39, 45, 60, 68],
          backgroundColor: 'rgb(216,191,216)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(216,191,216)', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}


import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})

export class TopThreeProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'HP Elitebook G8',
        'HP Printer',
        'Acer Monitor',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'HP Elitebook G8',
          y: 395,
          color: '#044342',
        },
        {
          name: 'HP Printer',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'Acer Monitor',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

}

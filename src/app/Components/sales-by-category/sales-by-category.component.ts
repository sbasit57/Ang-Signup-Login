import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise Assets'
    },
    xAxis: {
      categories: [
        'Machines',
        'Peripherals',
        'Mobile Phones',
        'Technical Components',
        'Appliances',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Machines',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Peripherals',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Mobile Phones',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Technical Components',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Appliances',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })


}

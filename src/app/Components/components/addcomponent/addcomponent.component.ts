import { Component } from '@angular/core';
interface Category{
  value: string;
  viewValue: string;
}
interface Location{
  value: string;
  viewValue:string
}
@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.scss']
})
export class AddcomponentComponent {
  categories: Category[] = [
    {value: 'main-0', viewValue: 'main'},
    {value: 'secondary-1', viewValue: 'secondary'},
    {value: 'peripheral-2', viewValue: 'peripheral'},
  ];
  locations: Location[] = [
    {value: 'karachi-0', viewValue: 'Karachi'},
    {value: 'islamabad-1', viewValue: 'Islamabad'},
    {value: 'dubai-2', viewValue: 'Dubai'},
  ];

}

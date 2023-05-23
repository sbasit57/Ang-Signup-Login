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
  selector: 'app-addconsumable',
  templateUrl: './addconsumable.component.html',
  styleUrls: ['./addconsumable.component.scss']
})
export class AddconsumableComponent {
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

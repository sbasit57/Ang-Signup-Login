import { Component } from '@angular/core';
interface Model {
  value: string;
  viewValue: string;
}
interface Status{
  value: string;
  viewValue: string;
}
interface Supplier{
  value: string;
  viewValue: string
}
interface Location{
  value: string;
  viewValue:string
}

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})
export class AddAssetsComponent {
  models: Model[] = [
    {value: 'hp-0', viewValue: 'Hp'},
    {value: 'dell-1', viewValue: 'Dell'},
    {value: 'samsung-2', viewValue: 'Samsung'},
  ];
  statuses: Status[] = [
    {value: 'deploy-0', viewValue: 'deployed'},
    {value: 'pending-1', viewValue: 'Pending'},
    {value: 'declined-2', viewValue: 'Declined'},
  ];
  suppliers: Supplier[] = [
    {value: 'supplier-0', viewValue: 'supplier 1'},
    {value: 'supplier-1', viewValue: 'supplier 2'},
    {value: 'supplier-2', viewValue: 'supplier 3'},
  ];
  locations: Location[] = [
    {value: 'karachi-0', viewValue: 'Karachi'},
    {value: 'islamabad-1', viewValue: 'Islamabad'},
    {value: 'dubai-2', viewValue: 'Dubai'},
  ];

}

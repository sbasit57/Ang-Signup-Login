import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
interface Model{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent {
  constructor(private _dialog:MatDialog){}
  models: Model[] = [
    {value: 'hp-0', viewValue: 'Hp'},
    {value: 'dell-1', viewValue: 'Dell'},
    {value: 'samsung-2', viewValue: 'Samsung'},
  ];
  closeAddModel(){
    this._dialog.closeAll();
  }
}

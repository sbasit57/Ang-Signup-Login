import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddconsumableComponent } from './addconsumable/addconsumable.component';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.scss']
})
export class ConsumablesComponent {
  constructor(private _dialog:MatDialog){}
  openAddConsumables(){
    this._dialog.open(AddconsumableComponent);
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  constructor(private _dialog:MatDialog){}
  openAddComponent(){
    this._dialog.open(AddcomponentComponent);
  }
}

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { AddModelComponent } from './add-assets/add-model/add-model.component';
import { AddStatusComponent } from './add-assets/add-status/add-status.component';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent {

  constructor(private _dialog: MatDialog){}

  openAddAsset(){
    this._dialog.open(AddAssetsComponent);
  }
  openAddModel(){
    this._dialog.open(AddModelComponent);
  }
  openAddStatus(){
    this._dialog.open(AddStatusComponent);
  }
}

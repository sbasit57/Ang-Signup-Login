import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAssetsComponent } from './add-assets/add-assets.component';

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
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
interface Status{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent {
  constructor(private _dialog:MatDialog){}
  statuses: Status[] = [
    {value: 'pending-0', viewValue: 'Pending'},
    {value: 'archived-1', viewValue: 'Archived'},
    {value: 'deployable-2', viewValue: 'Deployable'},
    {value: 'Undeployable-2', viewValue: 'Undeployable'},
  ];
  closeAddModel(){
    this._dialog.closeAll();
  }
}

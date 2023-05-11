import { Component } from '@angular/core';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
  faFile,
  faFolderOpen,
  faLaptop,
  faSignOut
} from '@fortawesome/free-solid-svg-icons';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faFile= faFile;
  faHand = faHand;
  faFolderOpen = faFolderOpen;
  faLaptop = faLaptop;
  faSignOut = faSignOut;

  collapsed = true;
  navData = navbarData;
}

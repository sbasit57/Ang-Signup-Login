// import { Component } from '@angular/core';
// import {
//   faDashboard,
//   faLocation,
//   faShop,
//   faBox,
//   faMoneyBill,
//   faChartBar,
//   faContactBook,
//   faHand,
//   faFile,
//   faFolderOpen,
//   faLaptop,
//   faSignOut
// } from '@fortawesome/free-solid-svg-icons';
// import { navbarData } from './nav-data';

// interface SideNavToggle {
//   screenWidth: number;
//   collapsed: boolean;
// }

// @Component({
//   selector: 'app-side-nav',
//   templateUrl: './side-nav.component.html',
//   styleUrls: ['./side-nav.component.scss']
// })
// export class SideNavComponent {
//   faDashboard = faDashboard;
//   faLocation = faLocation;
//   faShop = faShop;
//   faBox = faBox;
//   faMoneyBill = faMoneyBill;
//   faChartBar = faChartBar;
//   faContactBook = faContactBook;
//   faFile= faFile;
//   faHand = faHand;
//   faFolderOpen = faFolderOpen;
//   faLaptop = faLaptop;
//   faSignOut = faSignOut;

//   collapsed = true;
//   navData = navbarData;
// }



import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}

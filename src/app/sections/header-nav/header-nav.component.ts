import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  public nav: any;
  public hidded: any; public shown: any;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.nav = document.getElementById('ul_links');
    this.hidded = document.getElementsByClassName("hidded");
    this.shown = document.getElementsByClassName("shown");

    if (this.hidded.length > 0) {
      this.nav.classList.remove('hidded');
      this.nav.classList.add('shown');
    } else {
      this.nav.classList.remove('shown');
      this.nav.classList.add('hidded');
    }
  }

}

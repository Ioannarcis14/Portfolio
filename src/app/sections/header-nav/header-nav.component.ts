import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MatSelectModule } from '@angular/material/select';

@Component({
	selector: 'app-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
	public nav: any;
	public hidded: any; public shown: any;
	public selectedValue: any;

	constructor(public translate: TranslateService) {
		translate.addLangs(['es', 'en']);
		translate.setDefaultLang('es');
	}

	Flags = ['🇪🇸', '🇬🇧'];

	switchLanguage(lang: string) {
		console.log(this.translate.getDefaultLang());
		this.translate.use(lang);
	}

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

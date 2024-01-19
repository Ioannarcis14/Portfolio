import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	public profile_pic: string;
	public languages: any;

	constructor() {
		this.profile_pic = "assets/img/me.jpg";
		this.languages = ["JavaScript (ES6+)", "TypeScript", "Angular, Ionic", "PHP / CodeIgniter", "HTML, CSS", "JAVA"];
	}

	ngOnInit(): void {
	}

}

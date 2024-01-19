import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-social-media',
	templateUrl: './social-media.component.html',
	styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
	faCoffee = faCoffee; faGithub = faGithub; faLinkedin = faLinkedin; faWhatsapp = faWhatsapp; faEnvelope = faEnvelope;

	constructor() { }

	ngOnInit(): void {
	}

}

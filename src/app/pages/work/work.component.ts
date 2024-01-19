import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from "../../services/modal-service.service";

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
	faGithub = faGithub;
	faFilm = faFilm;
	public projects: any;


	constructor(private modalService: ModalService) {
		this.projects = [
			{
				title: "work_project1_title",
				image: "assets/img/codeIgniter_w.png",
				content: [
					"work_project1_text1",
					"work_project1_text2"
				],
				github: "https://github.com/Ioannarcis14/DAW2-Sintesi-Matei_Corderroure"
			},
			{
				title: "work_project2_title",
				image: "assets/img/pickeat_b.png",
				content: [
					"work_project2_text1",
					"work_project2_text2"
				],
				github: "https://github.com/Ioannarcis14/DAW2-Sintesi-APPClient-Matei_Corderroure",
				video: "assets/video/Pick_Eat.mp4"
			},
			{
				title: "work_project3_title",
				image: "assets/img/mascota_banner.png",
				content: [
					"work_project3_text1",
					"work_project3_text2"
				],
				github: "https://github.com/Ioannarcis14/PetsIonic"
			},
		]
	}



	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}

	ngOnInit(): void {
	}

}

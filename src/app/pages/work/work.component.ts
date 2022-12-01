import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {ModalService} from "../../services/modal-service.service";

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
        title: "Pickeat (Web)",
        image: "/assets/img/codeIgniter_w.png",
        content: [
          "Pickeat is a website to reserve a table or order at home. Pickeat web allows you to create and modify your restaurant and the data it contains.",
          "Made with CodeIgniter"
        ],
        github: "https://github.com/Ioannarcis14/DAW2-Sintesi-Matei_Corderroure"
      },
      {
        title: "Pickeat (App)",
        image: "/assets/img/pickeat_b.png",
        content: [
          "Pickeat is a website to reserve a table or order at home. Pickeat App is an application for customers that allows you to place orders, it gets the data from Pickeat Web.",
          "Made with Angular and Ionic"
        ],
        github: "https://github.com/Ioannarcis14/DAW2-Sintesi-APPClient-Matei_Corderroure",
        video: "/assets/video/Pick_Eat.mp4"
      },
      {
        title: "+Cota",
        image: "/assets/img/mascota_banner.png",
        content: [
          "+Cota is an application to be able to find a partner for your pet. You can press the like button for the pets that you like the most." ,
          "Made with Angular and Ionic, Firebase Database"
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

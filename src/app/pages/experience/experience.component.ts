import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Experience = [
    {
      name: "IMPORTMÀTICA IMPORTACIÓ/EXPORTACIÓ",
      date: "21/03/2018 – 17/07/2018",
      cargo: ["Computer device maintenance.", "Media Manager"]
    },
    {
      name: "JUST DIGITAL SL.",
      date: "01/09/2020 – 17/06/2021",
      cargo: ["Maquetador Web", "Programador Front"]
    }
  ];

  importmatica = ['IMPORTMÀTICA IMPORTACIÓ/EXPORTACIÓ'];
  jd = ['JUST. DIGITAL SL.'];
}

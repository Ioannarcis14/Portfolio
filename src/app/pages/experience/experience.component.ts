import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');

    let experience = ["experience_job1_title", "experience_job1_text1", "experience_job1_text2"];
    let experience2 = ["experience_job1_title", "experience_job1_text1", "experience_job1_text2"];

    experience.forEach(function(element, index) {
      translate.get(element).subscribe((res: string) => {
        console.log(res);
      });
    })


  }

  ngOnInit(): void {
  }

  Experience = [
    {
      name: "experience_job1_title",
      date: "21/03/2018 – 17/07/2018",
      cargo: ["experience_job1_text1", "experience_job1_text2"]
    },
    {
      name: "experience_job2_title",
      date: "01/09/2020 – 17/06/2021",
      cargo: ["experience_job2_text1", "experience_job2_text2"]
    }
  ];

  importmatica = ['IMPORTMÀTICA IMPORTACIÓ/EXPORTACIÓ'];
  jd = ['JUST. DIGITAL SL.'];
}

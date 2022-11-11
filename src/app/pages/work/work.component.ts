import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public projects: any;

  constructor() {
    this.projects = [
      {
        title: "unCode",
        image: "/Portfolio/assets/img/code1.jpg",
        content: [
          "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.",
          "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio."
        ]
      },
      {
        title: "Floppy IDE",
        image: "/Portfolio/assets/img/code2.png",
        content: [
          "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.",
          "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio."
        ]
      },
      {
        title: "No Code",
        image: "/Portfolio/assets/img/code3.png",
        content: [
          "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.",
        ]
      },
    ]
  }




  ngOnInit(): void {
  }

}

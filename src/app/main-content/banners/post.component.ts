import { Component, OnInit } from '@angular/core';

import { HttpService } from "../../http.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: string;

  posts: any[] = [];

  constructor(private httpService: HttpService) {
  };

  ngOnInit() {

    this.httpService.getPosts()
        .subscribe(
            (data: any) => {
              const myArray = [];
              for (let key in data) {
                myArray.push(data[key]);
              }
              this.posts = myArray;
              console.log(this.posts[0].title);
                this.title = this.posts[0].title;
            }
        );

  }

}

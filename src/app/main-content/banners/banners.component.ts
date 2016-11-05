import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  users: any[] = [];
  posts: any[] = [];

  movie: string = 'The godfather';

  constructor(private httpService: HttpService) {
  };

  ngOnInit() {

    this.httpService.getUsers()
        .subscribe(
            (data: any) => {
              const myArray = [];
              for (let key in data) {
                myArray.push(data[key]);
              }
              this.users = myArray;

            }
        );

    this.httpService.getPosts()
        .subscribe(
            (data: any) => {
              const myArray = [];
              for (let key in data) {
                myArray.push(data[key]);
              }
              this.posts = myArray;
            }
        );

    this.httpService.getMovie(this.movie)
        .subscribe(
            (data: any) => console.log(data)
        );
  }

}

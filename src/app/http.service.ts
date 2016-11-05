import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
        .map((response: Response) => response.json());
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
        .map((response: Response) => response.json());
  }

  getMovie(movie: string) {
    return this.http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json')
        .map((response: Response) => response.json());
  }

}

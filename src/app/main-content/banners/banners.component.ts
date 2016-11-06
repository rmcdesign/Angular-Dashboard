import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

    //movie: string = 'The godfather';

    constructor() {};

    ngOnInit() {

        // this.httpService.getMovie(this.movie)
        //     .subscribe(
        //         (data: any) => console.log(data)
        //     );

    }

}

import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../http.service";
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class UserComponent implements OnInit {

    users: any[] = [];

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

    }

}

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from "./user.component";
import { PostComponent } from "./post.component";
import { BannersComponent } from "./banners.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'banners',
                component: BannersComponent,
                children: [
                    {
                        path: 'posts',
                        component: PostComponent
                    },
                    {
                        path: 'users',
                        component: UserComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BannersRoutingModule { }

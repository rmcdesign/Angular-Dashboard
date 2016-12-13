import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "./user.component";
import { PostComponent } from "./post.component";
import { BannersComponent } from "./banners.component";

const routes: Routes = [
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
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BannersRoutingModule { }

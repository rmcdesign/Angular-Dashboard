import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./main-content/home/home.component";
import { BannersComponent } from "./main-content/banners/banners.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'banners', component: BannersComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

// RouterModule.forRoot([
//     { path: 'banners', component: BannersComponent },
//     { path: 'banners', component: BannersComponent, children: [
//         { path: 'user', component: UserComponent },
//         { path: 'post', component: PostComponent }
//     ] },
//     { path: '', component: HomeComponent }
// ])
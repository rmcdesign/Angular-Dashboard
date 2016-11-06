import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { BannersComponent } from './banners.component';
import { UserComponent } from "./user.component";
import { PostComponent } from "./post.component";

import { HttpService } from "../../http.service";

import { BannersRoutingModule } from "./banners.routing.module";


@NgModule({
    declarations: [
        BannersComponent,
        UserComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BannersRoutingModule
    ],
    providers: [HttpService],
    bootstrap: []
})
export class BannersModule { }
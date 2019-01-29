import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RaceDetailComponent } from "./race-detail/race-detail.component";
import { RaceListComponent } from "./races-list.component";

const routes: Routes = [
    { path: "", component: RaceListComponent },
    { path: "race-detail/:id", component: RaceDetailComponent }    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RacesRoutingModule { }

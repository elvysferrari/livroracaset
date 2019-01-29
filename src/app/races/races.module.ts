import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { RaceDetailComponent } from "./race-detail/race-detail.component";
import { RaceListComponent } from "./races-list.component";
import { RacesRoutingModule } from "./races-routing.module";

@NgModule({
    imports: [
        RacesRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        RaceListComponent,
        RaceDetailComponent
    ],
    entryComponents: [
        
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RacesModule { }

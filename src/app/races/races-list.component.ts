import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { Race } from "./shared/race.model";
import { RaceService } from "./shared/race.service";

/* ***********************************************************
* This is the master list component in the master-detail structure.
* This component gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
*************************************************************/
@Component({
    selector: "RacesList",
    moduleId: module.id,
    templateUrl: "./races-list.component.html",
    styleUrls: ["./race-list.component.scss"]
})
export class RaceListComponent implements OnInit {
    private _isLoading: boolean = false;
    private _races: Race[] = [];

    constructor(
        private _raceService: RaceService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this._races = this._raceService.getAllRaces();           
    }

    get races(): Race[] {
        return this._races;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCarItemTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/races/race-detail", tappedCarItem.id],
        {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }
}

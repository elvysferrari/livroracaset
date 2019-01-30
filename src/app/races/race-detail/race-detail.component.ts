import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { Race } from "../shared/race.model";
import { RaceService } from "../shared/race.service";



/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
@Component({
    selector: "RaceDetail",
    moduleId: module.id,
    templateUrl: "./race-detail.component.html"
})
export class RaceDetailComponent implements OnInit {
    private _race: Race;

    constructor(
        private _raceService: RaceService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {

        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const raceId = params.id;
                this._race = this._raceService.getRaceById(raceId);
            });
    }

    get race(): Race {
        return this._race;
    }

    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }

}

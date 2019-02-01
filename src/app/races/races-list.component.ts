import { Component, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";

import { Race } from "./shared/race.model";
import { RaceService } from "./shared/race.service";
import { BannerService } from "./shared/banner.service";

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
        private _routerExtensions: RouterExtensions,
        private _bannerService: BannerService
    ) { }

    ngOnInit(): void {
        this._races = this._raceService.getAllRaces(); 
        setTimeout(() => {
            this._bannerService.createBanner();         
        }, 1000)

    }

    get races(): Race[] {
        return this._races;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
    
    onRaceItemTap(args: ListViewEventData): void {
        const tappedRaceItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/races/race-detail", tappedRaceItem.id],
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

import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap, timestamp } from "rxjs/operators";

import { Race } from "../shared/race.model";
import { RaceService } from "../shared/race.service";
import { BannerService } from "../shared/banner.service";

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
        private _routerExtensions: RouterExtensions,
        private _bannerService: BannerService
    ) { }

    ngOnInit(): void {
        
        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const raceId = params.id;
                this._race = this._raceService.getRaceById(raceId);
                setTimeout(() => {
                    this._bannerService.createBanner();
                }, 1000)
            });
    }
    
    get race(): Race {
        return this._race;
    }

    onBackButtonTap(): void {
        
        this._routerExtensions.backToPreviousPage();
        setTimeout(() => {
            this._bannerService.createBanner();
        }, 1000)
        
    }

}

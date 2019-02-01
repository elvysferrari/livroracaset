import { AD_SIZE, createBanner, hideBanner } from "nativescript-admob";
import { isIOS } from "tns-core-modules/platform";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BannerService {
    private bannerHomeCreated = new BehaviorSubject<boolean>(false);
    private banner: boolean = false;
    
    setBannerStatus(status: boolean){
        this.banner = status;
    }
    getBannerStatus(){
        return this.banner;
    }
    getBannerCreated(){
        return this.bannerHomeCreated.asObservable();
    }
    createBanner() {
        const testing = false;
        
        createBanner({
            // if this 'view' property is not set, the banner is overlayed on the current top most view
            // view: ..,
            size: AD_SIZE.SMART_BANNER,
            //iosBannerId: "ca-app-pub-9517346003011652/3985369721",
            androidBannerId: testing
                ? "ca-app-pub-3940256099942544/6300978111"  // global test banner id
                : "ca-app-pub-4358080998486510/3535669536", // our registered banner id
            // Android automatically adds the connected device as test device with testing:true, iOS does not
            // iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
            margins: {
                // if both are set, top wins
                // top: 10
                bottom: isIOS ? 50 : 0
            },
            keywords: ["extraterrestrial", "extraterrestre", "et", "ufo", "planet", "planetas", "raças", "50 raças"]
        }).then(
            () => {
                
            }
        )
    }
}



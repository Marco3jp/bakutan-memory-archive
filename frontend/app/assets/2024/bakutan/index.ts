import {NatoriSanaEvent} from "~/model/event";
import {screen} from "~/assets/2024/bakutan/screen";
import {zan} from "~/assets/2024/bakutan/z-aN";
import {cinecitta} from "~/assets/2024/bakutan/cinecitta";
import {sanaNoBakutanRestaurant} from "~/assets/2024/bakutan/collaboration/sanaNoBakutanRestaurant";
import {sanaNoBakutanMuseum} from "~/assets/2024/bakutan/collaboration/sanaNoBakutanMuseum";
import {hillValley} from "~/assets/2024/bakutan/collaboration/hillValley";
import {towerRecordsKawasaki} from "~/assets/2024/bakutan/collaboration/towerRecordsKawasaki";
import {sanaAruki} from "~/assets/2024/bakutan/sanaAruki";
import {onodenMxVision} from "~/assets/2024/bakutan/onodenMxVision";
import {laCittadella} from "~/assets/2024/bakutan/laCittadella";
import {misc} from "~/assets/2024/bakutan/misc";
import {afterparty} from "~/assets/2024/bakutan/afterparty";
import {goods} from "~/assets/2024/bakutan/goods";

export const bakutan2024: NatoriSanaEvent = {
    name: "さなのばくたん。",
    stages: [
        screen,
        zan,
        cinecitta,
        sanaNoBakutanRestaurant,
        sanaNoBakutanMuseum,
        hillValley,
        towerRecordsKawasaki,
        sanaAruki,
        onodenMxVision,
        laCittadella,
        misc,
        goods,
        afterparty
    ]
}

import EventPage from '~/components/EventPage'
import { bakutan2024 } from '~/assets/2024/bakutan'
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};

export default function Index() {
    const initialStageIndex = 10 // さな歩き
    const initialChapterIndex = 0
    const natoriEvent = bakutan2024

    return (
        <EventPage 
            event={natoriEvent}
            initialChapterIndex={initialChapterIndex}
            initialStageIndex={initialStageIndex}
        />
    )
}

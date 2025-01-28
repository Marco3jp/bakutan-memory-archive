import EventPage from '~/components/EventPage'
import { bakutan2024 } from '~/assets/2024/bakutan'

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
import type {MetaFunction} from "@remix-run/node";
import eventData from "../assets/demo.json"
import {useState} from "react";

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive (beta)"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};


export default function Index() {
    const [currentChapter, setCurrentChapter] = useState(eventData.chapters[0].id)

    const chapterElements = eventData.chapters.map((chapter) => {
        const selectChapter = () => {
            setCurrentChapter(chapter.id)
        }

        return (
            <li key={chapter.id} className="flex flex-col items-center">
                {/* こっちは○ */}
                <button type="button" className="w-6 h-6 border-4 border-natori-accent-pink rounded-full"
                        onClick={selectChapter}></button>
                {/* こっちは縦線 */}
                <button type="button" className="h-32 border-2 border-natori-accent-pink"
                        onClick={selectChapter}></button>
            </li>
        )
    })


// chapterのidをキーに持つオブジェクト
    const memoriesByChapter: { [key: string]: Array<object> } = eventData.chapters.reduce((acc: {
        [key: string]: Array<object>
    }, chapter) => {
        acc[chapter.id] = chapter.memories.sort((a, b) => {
            const aData = new Date(`2018-03-07T${a.timeInEvent}Z`)
            const bData = new Date(`2018-03-07T${b.timeInEvent}Z`)
            return (aData.getTime() > bData.getTime()) ? 1 : -1
        })
        return acc;
    }, {})

    const memoryElements = memoriesByChapter[currentChapter].map((memory) => {
        return (
            <li key={memory.id}>
                <div>
                    <p>{memory.timeInEvent}</p>
                    <p><a href={memory.photoTweetUrl}></a>{memory.photoTweetUrl}</p>
                </div>
            </li>
        )
    }) ?? <p>no data</p>


    return (
        <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw">
            <header className="border-b border-solid border-natori-accent-pink flex">
                <h1>bakutan archive memory</h1>
            </header>

            <main className="flex">
                <aside>
                    <nav>
                        <ol>
                            {chapterElements}
                        </ol>
                    </nav>
                </aside>
                <section>
                    <ol>
                        {memoryElements}
                    </ol>
                </section>
            </main>
        </div>
    );
}

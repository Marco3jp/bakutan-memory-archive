import type {MetaFunction} from "@remix-run/node";
import eventData from "../assets/demo.json"
import {useState} from "react";
import "node_modules/react-tweet/dist/twitter-theme/components.js"
import {TweetWrapper} from "~/components/TweetWrapper";

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive (beta)"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};

// 時間の比較をするときにdateを作ったほうが楽かな〜と思って、共通で使えるように日付を定義しておいた
// 0年目のばくたん。という気持ちで日付を選んだ
const sanaChannelBaseDate = "2018-03-07"
const eventLength = new Date(`${sanaChannelBaseDate}T${eventData.event.eventDuration}Z`).getTime() - new Date(`${sanaChannelBaseDate}T00:00:00Z`).getTime()
const getTwitterIdRegexp = /https:\/\/twitter.com\/.*\/status\/(?<id>\d+)/

export default function Index() {
    const [currentChapter, setCurrentChapter] = useState<string>(eventData.chapters[0].id)

    const chapterElements = eventData.chapters.map((chapter, index) => {
        const selectChapter = () => {
            setCurrentChapter(chapter.id)
        }

        const nextChapter = eventData.chapters[index + 1] ?? {section: {start: eventData.event.eventDuration}}
        const chapterLength = new Date(`${sanaChannelBaseDate}T${nextChapter.section.start}Z`).getTime() - new Date(`${sanaChannelBaseDate}T${chapter.section.start}Z`).getTime()
        const chapterLengthPercentage = chapterLength / eventLength * 100

        return (
            <li key={chapter.id} className="flex flex-col items-center"
                // ↓の方針だと端数の処理次第で若干だけはみ出る可能性があるので、もしかするとflex-growの方がいいかもしれない
                style={{height: `${chapterLengthPercentage}%`}}>
                {/* こっちは○ */}
                <button type="button" className="w-6 h-6 border-4 border-natori-accent-pink rounded-full"
                        onClick={selectChapter}></button>
                {/* こっちは縦線 */}
                <button type="button" className="flex-grow border-2 border-natori-accent-pink"
                        onClick={selectChapter}></button>
            </li>
        )
    })

    // chapterのidをキーに持つオブジェクト
    const memoriesByChapter: { [key: string]: Array<object> } = eventData.chapters.reduce((acc: {
        [key: string]: Array<object>
    }, chapter) => {
        // このあたりのソート処理は一旦消す、イベント内時間まで書くのは普通にきつい
        acc[chapter.id] = chapter.memories.sort((a, b) => {
            const aData = new Date(`${sanaChannelBaseDate}T${a.timeInEvent}Z`)
            const bData = new Date(`${sanaChannelBaseDate}T${b.timeInEvent}Z`)
            return (aData.getTime() > bData.getTime()) ? 1 : -1
        })
        return acc;
    }, {})

    const memoryElements = memoriesByChapter[currentChapter].map((memory) => {
        const photoTweetId = memory.photoTweetUrl.match(getTwitterIdRegexp)?.groups?.id

        return (
            <li key={memory.photoTweetUrl} className="block pr-2">
                <TweetWrapper photoTweetId={photoTweetId}></TweetWrapper>
            </li>
        )
    }) ?? <p>no data</p>

    return (
        <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw flex flex-col">
            <header id="header" className="border-b border-solid border-natori-accent-pink flex items-center">
                <h1 className="ml-2">bakutan archive memory</h1>
            </header>

            <main id="main" className="flex">
                <aside className="h-full px-2">
                    <nav className="h-full">
                        <ol className="h-full">
                            {chapterElements}
                        </ol>
                    </nav>
                </aside>
                <section className="h-full flex-grow">
                    <ol className="h-full space-y-2 overflow-y-auto py-4">
                        {memoryElements}
                    </ol>
                </section>
            </main>
        </div>
    );
}

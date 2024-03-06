import type {MetaFunction} from "@remix-run/node";
import {bakutan2024} from "~/assets/2024/bakutan";
import {useState} from "react";
import "node_modules/react-tweet/dist/twitter-theme/components.js"
import {TweetWrapper} from "~/components/TweetWrapper";

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive (beta)"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};

const getTwitterIdRegexp = /https:\/\/twitter.com\/.*\/status\/(?<id>\d+)/

export default function Index() {
    const [currentStageIndex, setCurrentStageIndex] = useState<number>(7)
    const currentEvent = bakutan2024.stages[currentStageIndex]

    const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0)
    const currentChapter = currentEvent.chapters[currentChapterIndex]

    const stageRatioSum = currentEvent.chapters.reduce((acc, chapter) => { return acc + chapter.ratio }, 0)
    const chapterElements = currentEvent.chapters.map((chapter, index) => {
        const selectChapter = () => {
            setCurrentChapterIndex(index)
        }

        const chapterLengthPercentage = (chapter.ratio / stageRatioSum) * 100

        return (
            <li key={index} className="flex flex-col items-center"
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

    const memoryElements = currentChapter.memories.map((memory, index) => {
        const tweetId = memory.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""

        return (
            <li key={currentChapter.name+ "_" + index.toString()} className="block">
                <TweetWrapper tweetId={tweetId}></TweetWrapper>
            </li>
        )
    })

    const stageSelectElement = (() => {
        const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setCurrentChapterIndex(0)
            setCurrentStageIndex(parseInt(event.target.value))
        }

        return (
            <select onChange={onChange}>
                {
                    bakutan2024.stages.map((stage, index) => {
                        return <option key={index} value={index}>{stage.name}</option>
                    })
                }
            </select>
        )
    })()

    return (
        <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw flex flex-col">
            <header id="header" className="border-b border-solid border-natori-accent-pink flex items-center">
                <h1 className="ml-2">bakutan archive memory</h1>
                {stageSelectElement}
            </header>

            <main id="main" className="max-w-full flex">
                <aside className="h-full px-2">
                    <nav className="h-full">
                        <ol className="h-full">
                            {chapterElements}
                        </ol>
                    </nav>
                </aside>
                <section className="h-full flex-grow">
                    <ol className="h-full overflow-y-auto py-4 flex flex-row flex-wrap content-start items-start gap-4">
                        {memoryElements}
                    </ol>
                </section>
            </main>
        </div>
    );
}

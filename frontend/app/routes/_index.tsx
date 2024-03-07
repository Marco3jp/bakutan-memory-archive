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
    const currentStage = bakutan2024.stages[currentStageIndex]

    const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0)
    const currentChapter = currentStage.chapters[currentChapterIndex]
    // YouTubeっぽい見た目をモチーフにしたのでちょっと違和感はあるけど、最初に一番新しいツイートが並ぶようにとりあえずする
    // イベントが終わったりして落ち着いたら逆順にしたほうがいいのかもしれない
    const sortedMemories = currentChapter.memories.sort((a, b) => {
        const aId = a.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""
        const bId = b.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""
        return parseInt(bId) - parseInt(aId)
    })

    const stageRatioSum = currentStage.chapters.reduce((acc, chapter) => { return acc + chapter.ratio }, 0)
    const chapterElements = currentStage.chapters.map((chapter, index) => {
        const selectChapter = () => {
            setCurrentChapterIndex(index)
        }

        const chapterLengthPercentage = (chapter.ratio / stageRatioSum) * 100

        return (
            <li key={index} className="group flex flex-col items-center cursor-pointer" onClick={selectChapter}
                // ↓の方針だと端数の処理次第で若干だけはみ出る可能性があるので、もしかするとflex-growの方がいいかもしれない
                style={{height: `${chapterLengthPercentage}%`}}>
                {/* こっちは○ */}
                <div className={
                    `w-6 h-6 border-4 rounded-full ${currentChapterIndex === index ? "border-natori-accent-pink" : "border-natori-accent-pink-light group-hover:border-natori-accent-pink "}`
                }></div>
                {/* こっちは縦線 */}
                <div className={
                    `flex-grow border-2 ${currentChapterIndex === index ? "border-natori-accent-pink" : "border-natori-accent-pink-light group-hover:border-natori-accent-pink"}`
                }></div>
            </li>
        )
    })

    const memoryElements = sortedMemories.map((memory, index) => {
        const tweetId = memory.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""

        return (
            <li key={currentChapter.name+ "_" + index.toString()} className="block">
                <TweetWrapper tweetId={tweetId}></TweetWrapper>
            </li>
        )
    })

    const stageSelectElement = (() => {
        const [shouldShowStageList, setShouldShowStageList] = useState<boolean>(false)

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentChapterIndex(0)
            setShouldShowStageList(false)
            setCurrentStageIndex(parseInt(event.target.value))
        }

        return (
            <div className={`mr-2 text-neutral-50 ${shouldShowStageList ? "self-start" : ""}`}>
                <div onClick={() => setShouldShowStageList(true)} className={`px-1 md:px-2 py-1 text-xs/6 md:text-base border border-natori-accent-pink rounded line-clamp-1 ${shouldShowStageList ? "hidden" : ""}`}>
                    {currentStage.name}
                </div>
                <div onClick={() => setShouldShowStageList(false)} className={`h-dvh w-dvw fixed top-0 left-0 z-10 ${shouldShowStageList ? "" : "hidden"}`}></div>
                <div className={`flex flex-col px-2 py-1 border border-natori-accent-pink rounded divide-y divide-natori-accent-pink text-sm/6 md:text-base bg-gray-950 relative z-20 max-h-dvh overflow-y-auto ${shouldShowStageList ? "" : "hidden"}`}>
                    {
                        bakutan2024.stages.map((stage, index) => {
                            return (
                                <label className="block p-1">
                                    {stage.name}
                                    <input type="radio" name="stage" onChange={onChange} key={index} value={index} checked={currentStageIndex === index} hidden></input>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    })()

    return (
        <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw flex flex-col">
            <header id="header" className="border-b border-solid border-natori-accent-pink flex items-center justify-between">
                <h1 className="px-2 shrink-0 text-sm/6 md:text-base">bakutan archive memory</h1>
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

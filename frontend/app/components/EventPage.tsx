import type {MetaFunction} from "@remix-run/node";
import {useState} from "react";
import "node_modules/react-tweet/dist/twitter-theme/components.js"
import {TweetWrapper} from "~/components/TweetWrapper";
import captionIcon from "../../public/caption.svg"
import { Link } from "@remix-run/react";
import { NatoriSanaEvent } from "~/model/event";

export type Props = {
    event: NatoriSanaEvent
    initialStageIndex: number
    initialChapterIndex: number
}

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};

const getTwitterIdRegexp = /https:\/\/twitter.com\/.*\/status\/(?<id>\d+)/

export default function EventPage(props: Props) {
    const [currentStageIndex, setCurrentStageIndex] = useState<number>(props.initialStageIndex)
    const currentStage = props.event.stages[currentStageIndex]

    const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(props.initialChapterIndex)
    const currentChapter = currentStage.chapters[currentChapterIndex]
    // 古いものが上に来るように
    // FIXME: でもヌォンタートなどツイート数で雑に切ってるところはうまくできてないので対応が必要
    const sortedMemories = currentChapter.memories.sort((a, b) => {
        const aId = a.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""
        const bId = b.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""
        return parseInt(aId) - parseInt(bId)
    })

    const stageRatioSum = currentStage.chapters.reduce((acc, chapter) => { return acc + chapter.ratio }, 0)
    const chapterElements = currentStage.chapters.map((chapter, index) => {
        const selectChapter = () => {
            setCurrentChapterIndex(index)
        }

        const chapterLengthPercentage = (chapter.ratio / stageRatioSum) * 100

        return (
            <li key={`${currentStage.name}${currentStageIndex}-${index}`} className="group flex flex-col items-center cursor-pointer" onClick={selectChapter}
                // ↓の方針だと端数の処理次第で若干だけはみ出る可能性があるので、もしかするとflex-growの方がいいかもしれない
                style={{height: `${chapterLengthPercentage}%`}}>
                {/* こっちは縦線 */}
                <div className={
                    `grow border-2 ${currentChapterIndex === index ? "border-natori-accent-pink" : "border-natori-accent-pink-light group-hover:border-natori-accent-pink"}`
                }></div>
                {/* こっちは○ */}
                <div className={
                    `w-6 h-6 border-4 rounded-full ${currentChapterIndex === index ? "border-natori-accent-pink" : "border-natori-accent-pink-light group-hover:border-natori-accent-pink "}`
                }></div>
            </li>
        )
    })

    const memoryElements = sortedMemories.map((memory, index) => {
        const tweetId = memory.tweetUrl.match(getTwitterIdRegexp)?.groups?.id ?? ""

        return (
            <li key={`${currentChapter.name}${currentChapterIndex}-${index}`} className="block">
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
                <div onClick={() => setShouldShowStageList(true)} className={`px-1 md:px-2 py-1 text-xs/6 md:text-base border border-natori-accent-pink rounded-sm line-clamp-1 ${shouldShowStageList ? "hidden" : ""}`}>
                    {currentStage.name}
                </div>
                <div onClick={() => setShouldShowStageList(false)} className={`h-dvh w-dvw fixed top-0 left-0 z-10 ${shouldShowStageList ? "" : "hidden"}`}></div>
                <div className={`flex flex-col px-2 py-1 border border-natori-accent-pink rounded-sm divide-y divide-natori-accent-pink text-sm/6 md:text-base bg-gray-950 relative z-20 max-h-dvh overflow-y-auto ${shouldShowStageList ? "" : "hidden"}`}>
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

    const [shouldShowAboutSite, setShouldShowAboutSite] = useState<boolean>(false)

    return (
        <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw flex flex-col border border-natori-accent-pink rounded-sm">
            <header id="header" className="border-b border-solid border-natori-accent-pink flex items-center justify-between">
                {stageSelectElement}
                <Link to="/indexes" className={"text-blue-300 underline shrink-0"}>他イベント</Link>
            </header>

            <main id="main" className="max-w-full flex">
                <aside className="h-full px-2">
                    <nav className="h-full flex flex-col">
                        <ol className="grow">
                            {chapterElements}
                        </ol>
                        <div className="py-2" onClick={() => setShouldShowAboutSite(true)}>
                            <img src={captionIcon} alt="サイトについて" />
                        </div>
                    </nav>
                </aside>
                <section className="h-full grow">
                    <ol className="h-full overflow-y-auto py-4 flex flex-row flex-wrap content-start items-start gap-4">
                        {memoryElements}
                    </ol>
                </section>
                <section className={`absolute top-0 left-0 h-dvh w-dvw flex justify-center items-center bg-gray-950/75 ${shouldShowAboutSite ? "block" : "hidden"}`} onClick={() => {setShouldShowAboutSite(false)}}>
                    <div className="p-4 max-w-[80%] border border-natori-accent-pink rounded-sm space-y-2">
                        <h2 className="text-xl">このサイトについて</h2>
                        <p>bakutan memory archiveは名取さなさんのイベントに関わるツイートを見やすく残すことを目指している<strong>非公式のファンサイト</strong>です。</p>
                        <p>掲載するツイートはすべて引用の形式を取っていますが、もし載せないでほしい場合は運営・管理者であるMarco (<a href="https://twitter.com/Marco_utau" target="_blank" className="text-blue-500 underline" onClick={(e) => {e.stopPropagation()}}>@Marco_utau</a>) にリプライ・メンションかDMで教えてください。</p>
                        <p>同様に、名取さなさんの権利を持つ方からの要請（公式ツイートの掲載、サイトの公開に関してなど）があれば速やかに対応します。</p>
                        <p>また、ツイートは手動でハッシュタグ検索から探しています。あまりにもせんせえがたの愛がデカく、ツイートが多すぎたためRT数などで絞り込んでおり、その他見落としなどで抜けているツイートもありますがご了承ください。</p>
                        <p>サイトの運営者自身はこのサイトのアクセスログの収集やアクセス解析などを行っていません。ただし、サーバーを管理している第三者やツイートに関連する第三者（X社を含む）が何らかの収集を行っている可能性があります。</p>
                        <p>このサイトのソースコードについては <a href="https://github.com/Marco3jp/bakutan-memory-archive" target="_blank" className="text-blue-500 underline" onClick={(e) => {e.stopPropagation()}}>https://github.com/Marco3jp/bakutan-memory-archive</a> に公開しています。</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

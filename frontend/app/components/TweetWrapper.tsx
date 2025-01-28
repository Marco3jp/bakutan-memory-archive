// 公式ドキュメントの通りにimportすると index.client.js の Tweet コンポーネントを使ってしまう
// これらは内部で getTweet, fetchTweet を呼び、Twitter syndication API を叩くのでCORSエラーで使えない
// swr.js のほうに実装されている Tweet コンポーネントは useTweet を呼び、これは CORS friendly な vercel のAPIを使ってくれる
import { Tweet } from 'node_modules/react-tweet/dist/swr.js'
import "./tweet-wrapper.scss"

export function TweetWrapper(props: {tweetId: string}) {
    return (
        <div className="tweet-wrapper" data-theme="dark">
            <Tweet data-theme="dark" id={props.tweetId}></Tweet>
        </div>
    )
}

import { Tweet } from 'react-tweet'
import "./tweet-wrapper.scss"

export function TweetWrapper(props: {photoTweetId: string}) {
    return (
        <div className="tweet-wrapper" data-theme="dark">
            <Tweet data-theme="dark" id={props.photoTweetId}></Tweet>
        </div>
    )
}

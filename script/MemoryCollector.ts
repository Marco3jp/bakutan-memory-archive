// ==UserScript==
// @name         MemoryCollector
// @description  Collect memories from Twitter and store in LocalStorage
// @version      1.0
// @author       Marco
// @homepage     https://marco.plus
// @namespace    https://marco.plus
// @website      https://twitter.com/Marco_utau
// @match        https://x.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // TODO
    // - DOMの更新で発火させるためのMutationObserverの実装
    // - 発見したツイートをLocalStorageに保存する処理
    //   - 検索クエリをキーにする？
    //   - ツイートのメタデータ（Fav, RTなど）も保存する？
    //   - 保存した日時を保存しておく
    // - 保存されたタイミングでトーストを出すか
    //   - 動作感がないのでフィードバックがあったほうが良いかもと思い
    // - LocalStorageからEventPageに流し込むための吐き出し
    //   - ワンライナーでも良いけど、結局ワンライナーを書くならどっかに生やして叩けるようにしてよくね、という感じ
    //   - と思ったが分類自体が手動な側面あるから、ツイート本文や画像を含めて分類するための画面がほしいかも
    //     - 分類用の画面をこのリポジトリに生やして、それを使って分類した結果をLocalStorageに保存するとかはありかも？

    // 
    const observingTargetElm = document.querySelector('[aria-label="タイムライン: タイムラインを検索"] div');
    if (!observingTargetElm) {
        return;
    }

    const observer = new MutationObserver(timelineHandler);
    observer.observe(observingTargetElm, { childList: true });

    //  a[href*=status]:not([href*=photo],[href*=analytics])

    // タイムラインが更新された
    function timelineHandler(args) {
        console.log('timelineHandler');
        console.log(args);
    }
})();

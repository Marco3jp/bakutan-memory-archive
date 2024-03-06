export type Memory = {
    tweetUrl: string
}

export type Chapter = {
    name: string,
    // radio は stageのチャプターのうち、どれだけの比率を占めるかを表す
    // 例えば、stageのチャプターが3つで、それぞれのradioが1, 2, 3の場合、それぞれのチャプターが1/6, 2/6, 3/6の比率で表示される
    ratio: number,
    memories: Memory[]
}

export type Stage = {
    name: string,
    locationName: string,
    chapters: Chapter[]
}

export type NatoriSanaEvent = {
    name: string,
    stages: Stage[]
}

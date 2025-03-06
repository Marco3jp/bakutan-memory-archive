type MemoryTweet = {
    id: string,
    text: string,
    userId: string,
    date: string,
    classification: string
};

export type BeforeClassification = Array<MemoryTweet>;

export type AfterClassification = {
    [eventKey: string]: {
        [stageKey: string]: Array<MemoryTweet>
    }
}
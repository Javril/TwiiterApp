import { Action } from 'redux';

export enum TweetActionType {
    FETCH_TWEETS = '[Tweet] Fetch Ttweets',
    UPDATE_TWEETS = '[Tweet] Update Tweets',
    FAILED_TWEETS = '[Tweet] Failed Tweets'
}

export class FetchTweets implements Action {
    type = TweetActionType.FETCH_TWEETS;
    constructor(public payload: any) {}
}
  
export class UpdateTweets implements Action {
    readonly type = TweetActionType.UPDATE_TWEETS;
    constructor(public payload: any) {}
}

export class FailedTweets implements Action {
    readonly type = TweetActionType.FAILED_TWEETS;
    constructor(public payload: any) {}
}

export type All =
    | FetchTweets
    | UpdateTweets
    | FailedTweets;
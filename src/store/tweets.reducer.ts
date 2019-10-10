import { TweetActionType, All } from './actions';

export const initialState: any = {
    tweets: [],
    errorMessage: null
};

export const tweetReducer = (state = initialState, action: All) => {
    switch (action.type) {
        case TweetActionType.FETCH_TWEETS:
            return { ...state, tweets: action.payload.tweets, errorMessage: null }
        case TweetActionType.UPDATE_TWEETS:
            return { ...state, tweets: action.payload.tweets, errorMessage: null }
        case TweetActionType.FAILED_TWEETS:
            return { ...state, tweets: [], errorMessage: 'Cannot Doad Data' }
        default:
            return state;
    }
}
import * as redux from 'redux';
import { tweetReducer } from './tweets.reducer';

export const init = () => {
    const reducer = redux.combineReducers({
        tweets: tweetReducer
    });
    const store = redux.createStore(reducer);

    return store;
}
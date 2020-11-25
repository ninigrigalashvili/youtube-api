import * as types from './videos.actionTypes';

const videosReducerDefaultState = [];

export default (state=videosReducerDefaultState, action) => {
    switch(action.type) {
        case types.FETCH_VIDEOS:
            return {
                ...state,
                Videos: action.payload
            }
            default: 
            return state;
        }
    }
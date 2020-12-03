import * as types from './videos.actionTypes';

const videosReducerDefaultState = [];

export default (state = videosReducerDefaultState, action) => {
    switch (action.type) {
        case types.FETCH_VIDEOS:
            return {
                ...state,
                Videos: action.payload
            }
        case types.FETCH_TRENDING_VIDEOS:
            return {
                ...state,
                TrendingVideos: action.payload
            }
        case types.FETCH_SEARCHED_VIDEOS:
            return {
                ...state,
                SearchedVideos: action.payload
            }
        case types.FETCH_SEARCHED_TRENDING_VIDEOS:
            return {
                ...state,
                SearchedTrendingVideos: action.payload
            }
        case types.FETCH_VIDEO_COMMENTS:
            return {
                ...state,
                Comments: action.payload
            }
        default:
            return state;
    }
}
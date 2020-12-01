import * as types from './videos.actionTypes';

export function FetchVideos(videos) {
    return {
        type: types.FETCH_VIDEOS,
        payload: videos
    }
}


export function fetchtrendingvideos(videos) {
    return {
        type: types.FETCH_TRENDING_VIDEOS,
        payload: videos
    }
}


export function fetchSearchedvideos(videos) {
    return {
        type: types.FETCH_SEARCHED_VIDEOS,
        payload: videos
    }
}


export function fetchSearchedTrendingVideos(videos) {
    return {
        type: types.FETCH_SEARCHED_TRENDING_VIDEOS,
        payload: videos
    }
}
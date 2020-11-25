import * as types from './videos.actionTypes';

export function FetchVideos(videos) {
    return {
        type: types.FETCH_VIDEOS,
        payload: videos
    }
}
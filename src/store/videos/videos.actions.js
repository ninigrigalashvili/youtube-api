import { FetchVideos } from './videos.actionGenerator';
import { fetchAllVideos,fetchTrendingVideos,fetchSearchedVideos } from '../../services/youtubeAPI';
export const FetchAllVideos = () => {
    return async (dispatch) => {
      const Videos = await fetchAllVideos();
      dispatch(FetchVideos(Videos))
    }
}

export const FetchTrendingVideos = () => {
  return async(dispatch) => {
    const Videos = await fetchTrendingVideos();
    dispatch(FetchVideos(Videos))
  }
}



export const FetchSearchedVideos = (keyword) => {
  return async(dispatch) => {
    const Videos = await fetchSearchedVideos(keyword);
    dispatch(FetchVideos(Videos))
  }
}



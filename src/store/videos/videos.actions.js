import { FetchVideos } from './videos.actionGenerator';
import YoutubeAPIService from '../../services/youtubeAPI';
export const FetchAllVideos = () => {
    return async (dispatch) => {
      let YoutubeAPIServiceInstance = new YoutubeAPIService();
      const Videos = await YoutubeAPIServiceInstance.fetchAllVideos();
      dispatch(FetchVideos(Videos))
    }
}

export const FetchTrendingVideos = () => {
  return async(dispatch) => {
    let YoutubeAPIServiceInstance = new YoutubeAPIService();
    const Videos = await YoutubeAPIServiceInstance.fetchTrendingVideos();
    dispatch(FetchVideos(Videos))
  }
}



export const FetchSearchedVideos = (keyword) => {
  return async(dispatch) => {
    let YoutubeAPIServiceInstance = new YoutubeAPIService();
    const Videos = await YoutubeAPIServiceInstance.fetchSearchedVideos(keyword);
    dispatch(FetchVideos(Videos))
  }
}



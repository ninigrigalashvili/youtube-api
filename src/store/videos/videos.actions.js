import { FetchVideos, fetchtrendingvideos , fetchSearchedvideos, fetchSearchedTrendingVideos, fetchVideocomments, fetchVideoRecommendations} from './videos.actionGenerator';
import { fetchAllVideos,fetchTrendingVideos,fetchSearchedVideos, fetchVideoComments, fetchRecommendedVideos } from '../../services/youtubeAPI';
export const FetchAllVideos = () => {
    return async (dispatch) => {
      const Videos = await fetchAllVideos();
      dispatch(FetchVideos(Videos))
    }
}

export const FetchTrendingVideos = () => {
  return async(dispatch) => {
    const Videos = await fetchTrendingVideos();
    dispatch(fetchtrendingvideos(Videos))
  }
}



export const FetchSearchedVideos = (keyword) => {
  return async(dispatch) => {
    const Videos = await fetchSearchedVideos(keyword);
    dispatch(fetchSearchedvideos(Videos))
  }
}


export const FetchSearchedTrendingVideos = (keyword) => {
  return async(dispatch) => {
    const Videos = await fetchSearchedVideos(keyword);
    dispatch(fetchSearchedTrendingVideos(Videos))
  }
}

export const FetchVideoComments = (id) => {
  return async(dispatch) => {
    const Comments = await fetchVideoComments(id)
    dispatch(fetchVideocomments(Comments))
  }
}


export const FetchRecommendedVideos = () => {
  return async(dispatch) => {
    const Videos = await fetchRecommendedVideos();
    dispatch(fetchVideoRecommendations(Videos))
  }
}




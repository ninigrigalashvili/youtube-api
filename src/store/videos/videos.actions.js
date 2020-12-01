import { FetchVideos, fetchtrendingvideos , fetchSearchedvideos, fetchSearchedTrendingVideos} from './videos.actionGenerator';
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






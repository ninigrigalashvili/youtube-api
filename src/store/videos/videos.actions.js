import { FetchVideos, fetchtrendingvideos , fetchSearchedvideos, fetchSearchedTrendingVideos, fetchVideocomments} from './videos.actionGenerator';
import { fetchAllVideos,fetchTrendingVideos,fetchSearchedVideos, fetchVideoComments } from '../../services/youtubeAPI';
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
  console.log("cccccccccccccccccccccccccccccccccc")
  return async(dispatch) => {
    const Comments = await fetchVideoComments(id)
    dispatch(fetchVideocomments(Comments))
  }
}





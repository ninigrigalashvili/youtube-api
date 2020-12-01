export const selectFavouriteVideos = state  => {
   console.log("stateeee", state.FavouritesReducer)
        return state.FavouritesReducer
    //array of favourite video ids
} 


export const selectVideosFromFavourites = state => {

    let videos = state.VideosReducer.Videos;
    let searchedVideos = state.VideosReducer.SearchedVideos;
    let trendingVideos = state.VideosReducer.TrendingVideos;
    let searchedTrendingVideos = state.VideosReducer.SearchedTrendingVideos;


   
    // searchedVideos && searchedVideos.forEach(video => video.id = video.id.videoId);

    let videosAndSearched = videos && searchedVideos && videos.concat(searchedVideos)
    let trendingVideosAndSearched = trendingVideos && searchedTrendingVideos && trendingVideos.concat(searchedTrendingVideos)

    let allVideos =  
    videosAndSearched && trendingVideosAndSearched ? videosAndSearched.concat(trendingVideosAndSearched) : 
    videos && trendingVideosAndSearched ? videos.concat(trendingVideosAndSearched) : 
    videosAndSearched && trendingVideos ?  videosAndSearched.concat(trendingVideos) : 
    videosAndSearched && searchedTrendingVideos ? videosAndSearched.concat(searchedTrendingVideos) : 
    videosAndSearched ? videosAndSearched :
    trendingVideosAndSearched ? trendingVideosAndSearched :  
    videos && trendingVideos ? videos.concat(trendingVideos) : 
    videos ? videos : 
    searchedVideos ? searchedVideos :
    trendingVideos ? trendingVideos :
       [];
    //remove duplicates 
    allVideos= allVideos.filter( (ele, ind) => ind === allVideos.findIndex( elem => elem.videoId === ele.videoId && elem.id === ele.id))
    
    const favouriteVideos = state.FavouritesReducer;
    //display those videos that match to favourites id
    return allVideos && allVideos.filter(o1 => favouriteVideos.some(o2 => o1.id === o2));
}
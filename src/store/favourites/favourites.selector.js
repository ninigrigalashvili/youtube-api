export const selectFavouriteVideos = state  => {
        return state.FavouritesReducer
    //array of favourite video ids
} 


export const selectVideosFromFavourites = state => {

    let videos = state.VideosReducer.Videos;
    let searchedVideos = state.VideosReducer.SearchedVideos;
    let trendingVideos = state.VideosReducer.TrendingVideos;
    let searchedTrendingVideos = state.VideosReducer.SearchedTrendingVideos;
    let recommendedVideos = state.VideosReducer.RecommendedVideos;


    searchedVideos && searchedVideos.forEach(video =>  {
        if(typeof video.id === 'object') {
            return video.id = video.id.videoId
        }
        return video
    })

    searchedTrendingVideos && searchedTrendingVideos.forEach(video =>  {
        if(typeof video.id === 'object') {
            return video.id = video.id.videoId
        }
        return video
    })
        

    let videosAndSearched = videos && searchedVideos && videos.concat(searchedVideos)
    let trendingVideosAndSearched = trendingVideos && searchedTrendingVideos && trendingVideos.concat(searchedTrendingVideos)

    let allVideos =  
    videosAndSearched && trendingVideosAndSearched && recommendedVideos ? videosAndSearched.concat(trendingVideosAndSearched).concat(recommendedVideos) : 
    videosAndSearched && trendingVideosAndSearched ? videosAndSearched.concat(trendingVideosAndSearched) : 
    videos && trendingVideosAndSearched ? videos.concat(trendingVideosAndSearched) : 
    videosAndSearched && trendingVideos ?  videosAndSearched.concat(trendingVideos) : 
    videosAndSearched && searchedTrendingVideos ? videosAndSearched.concat(searchedTrendingVideos) : 
    videosAndSearched ? videosAndSearched :
    trendingVideosAndSearched ? trendingVideosAndSearched :  
    videos && trendingVideos ? videos.concat(trendingVideos) : 
    videosAndSearched && recommendedVideos && trendingVideos ? videosAndSearched.concat(recommendedVideos).concat(trendingVideos) :
    trendingVideosAndSearched && recommendedVideos && videos ? trendingVideosAndSearched.concat(recommendedVideos).concat(videos) : 
    videosAndSearched && recommendedVideos && searchedTrendingVideos ? videosAndSearched.concat(recommendedVideos).concat(searchedTrendingVideos) : 
    trendingVideosAndSearched && recommendedVideos && searchedVideos ? trendingVideosAndSearched.concat(recommendedVideos).concat(searchedVideos) : 
    videosAndSearched && recommendedVideos ? videosAndSearched.concat(recommendedVideos) :
    trendingVideosAndSearched && recommendedVideos ? trendingVideosAndSearched.concat(recommendedVideos) : 
    videos && recommendedVideos ? videos.concat(recommendedVideos) : 
    trendingVideos && recommendedVideos ? trendingVideos.concat(recommendedVideos) :
    searchedVideos && recommendedVideos ? searchedVideos.concat(recommendedVideos) : 
    searchedTrendingVideos && recommendedVideos ? searchedTrendingVideos.concat(recommendedVideos) : 
    videos ? videos : 
    searchedVideos ? searchedVideos :
    trendingVideos ? trendingVideos :
    recommendedVideos ? recommendedVideos: 
       [];
    //remove duplicates 
    allVideos= allVideos.filter( (ele, ind) => ind === allVideos.findIndex( elem => elem.videoId === ele.videoId && elem.id === ele.id))
    
    const favouriteVideos = state.FavouritesReducer

    //display those videos that match to favourites id
    return allVideos && allVideos.filter(o1 => favouriteVideos.some(o2 => o1.id === o2));
}
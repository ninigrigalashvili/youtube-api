export const selectVideos = state  => {
    return state.VideosReducer.Videos
} 


export const selectTrendingVideos  = state => {
    return state.VideosReducer.TrendingVideos;
}


export const selectSearchedVideos = state  => {
    let searchedVideos = state.VideosReducer.SearchedVideos;
    return searchedVideos
} 


export const selectSearchedTrendingVideos = state  => {
    let searchedTrendingVideos = state.VideosReducer.SearchedTrendingVideos;
    return searchedTrendingVideos;
} 

export const selectComments = state => {
    return state.VideosReducer.Comments
}


export const selectRecommendedVideos = state => {
    return state.VideosReducer.RecommendedVideos;
}
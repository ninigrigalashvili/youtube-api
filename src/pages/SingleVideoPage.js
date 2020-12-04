import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchRecommendedVideos, FetchVideoComments } from '../store/videos/videos.actions';
import { selectComments, selectRecommendedVideos } from '../store/videos/videos.selector';
import { selectFavouriteVideos } from '../store/favourites/favourites.selector';
import VideoRecommendations from '../components/VideoRecommendations';
import Videoplayer from '../components/VideoPlayer';
import YoutubeHeader from '../components/YoutubeHeader';
import FavouriteCounter from '../components/FavouriteCounter';
import { AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';

const SingleVideoPage = (props) => {
    const { Comments, RecommendedVideos, FavouriteVideos } = props;
    const videoId = props.location.pathname.split('/')[2];




    const addToFavourite = async (videoId) => {
            !FavouriteVideos.length ?
                props.AddToFavourites(videoId) :
                FavouriteVideos.includes(videoId) ?
                    props.RemoveFromFavourites(videoId) :
                    props.AddToFavourites(videoId)    
    }



    useEffect(async () => {
        console.log("ggg", props.location.pathname.split("/")[2])
    }, [])

    useEffect(async () => {
        await props.FetchVideoComments(videoId)
        await props.FetchRecommendedVideos()
    }, [])




    return (
        <div>
            <YoutubeHeader onSearch={() => {}}/>
            <FavouriteCounter count={props.FavouriteVideos.length} />
            <Videoplayer videoId={videoId} comments={Comments} />
            <VideoRecommendations
                RecommendedVideos={RecommendedVideos}
                FavouriteVideos={FavouriteVideos}
                addToFavourite={addToFavourite}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    Comments: selectComments(state),
    RecommendedVideos: selectRecommendedVideos(state),
    FavouriteVideos: selectFavouriteVideos(state)
})



const mapDispatchToProps = (dispatch) => ({
    FetchVideoComments: (id) => dispatch(FetchVideoComments(id)),
    FetchRecommendedVideos: () => dispatch(FetchRecommendedVideos()),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id))
})



export default connect(mapStateToProps, mapDispatchToProps)(SingleVideoPage)
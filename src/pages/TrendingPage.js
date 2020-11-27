import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import VideoList from '../components/VideoList';
import YoutubeHeader from '../components/YoutubeHeader';
import { connect } from 'react-redux';
import { FetchTrendingVideos, FetchSearchedVideos } from '../store/videos/videos.actions';
import { selectVideos } from '../store/videos/videos.selector';
import { selectFavouriteVideos } from '../store/favourites/favourites.selector';
import {  AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';
import FavouriteCounter from '../components/FavouriteCounter';

const TrendingPage = (props) => {
    const { Videos, FavouriteVideos } = props;

    const onSearch = async keyword => {
        console.log("keyword", keyword)
        if (keyword) {
             await props.FetchSearchedVideos(keyword)
        } else {
            await props.FetchTrendingVideos();
        }
    }

    const addToFavourite = async(videoId) => {
        !FavouriteVideos.length ?
         props.AddToFavourites(videoId) :
        FavouriteVideos.includes(videoId) ?
            props.RemoveFromFavourites(videoId) :
              props.AddToFavourites(videoId)
     
      }

    useEffect(async () => {
        await props.FetchTrendingVideos();
    }, [])
    return (
        <div>
            <YoutubeHeader onSearch={onSearch} />
            <FavouriteCounter  count={FavouriteVideos.length}/>
            <div className="content-container__videos">
            {
                Videos && Videos.length ? (
                    <VideoList
                     data={Videos}
                     addToFavourite={addToFavourite}
                     FavouriteVideos={FavouriteVideos}
                     />

                ) : (
                        <Loading />
                    )
            }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    Videos: selectVideos(state),
    FavouriteVideos: selectFavouriteVideos(state)
})

const mapDispatchToProps = dispatch => ({
    FetchTrendingVideos: () => dispatch(FetchTrendingVideos()),
    FetchSearchedVideos: (keyword) => dispatch(FetchSearchedVideos(keyword)),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
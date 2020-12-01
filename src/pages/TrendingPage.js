import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import VideoList from '../components/VideoList';
import YoutubeHeader from '../components/YoutubeHeader';
import { connect } from 'react-redux';
import { FetchTrendingVideos, FetchSearchedTrendingVideos } from '../store/videos/videos.actions';
import { selectTrendingVideos,selectSearchedTrendingVideos } from '../store/videos/videos.selector';
import { selectFavouriteVideos } from '../store/favourites/favourites.selector';
import {  AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';
import FavouriteCounter from '../components/FavouriteCounter';

const TrendingPage = (props) => {
    const {  FavouriteVideos, TrendingVideos, SearchedTrending } = props;
    const [truthy, setTruthy] = useState(false);

    const onSearch = async keyword => {
        console.log("keyword", keyword)
        if (keyword) {
            setTruthy(true)
             await props.FetchSearchedTrendingVideos(keyword)
        } else {
            setTruthy(false)
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
                TrendingVideos && TrendingVideos.length ? (
                    <VideoList
                     data={truthy ? SearchedTrending : TrendingVideos}
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
    FavouriteVideos: selectFavouriteVideos(state),
    TrendingVideos: selectTrendingVideos(state),
    SearchedTrending: selectSearchedTrendingVideos(state)
})

const mapDispatchToProps = dispatch => ({
    FetchTrendingVideos: () => dispatch(FetchTrendingVideos()),
    FetchSearchedTrendingVideos: (keyword) => dispatch(FetchSearchedTrendingVideos(keyword)),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
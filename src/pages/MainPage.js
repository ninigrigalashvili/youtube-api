import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectVideos } from '../store/videos/videos.selector';
import { FetchAllVideos, FetchSearchedVideos } from '../store/videos/videos.actions';
import YoutubeHeader from '../components/YoutubeHeader';
import VideoList from '../components/VideoList';
import FavouriteCounter from '../components/FavouriteCounter';
import Loading from '../components/Loading';
import { selectFavouriteVideos } from '../store/favourites/favourites.selector';
import {  AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';

const MainPage = (props) => {
    const { Videos, FavouriteVideos } = props;
    // const [selectedFavouriteVideo, setSelectedFavouriteVideo] = useState({});
    // const [count, setCount] = useState(0);
  

    const onSearch = async keyword => {
        console.log("keyword", keyword)
        if (keyword) {
            await props.FetchSearchedVideos(keyword)
        } else {
            await props.FetchAllVideos()
        }
    }


    const addToFavourite = async(videoId) => {
        !FavouriteVideos.length ?
         props.AddToFavourites(videoId) :
        FavouriteVideos.includes(videoId) ?
            props.RemoveFromFavourites(videoId) :
              props.AddToFavourites(videoId)
        // setSelectedFavouriteVideo({...selectedFavouriteVideo, [videoId]: !selectedFavouriteVideo[videoId]})
        // if(!selectedFavouriteVideo[videoId] === true) {
        //     setCount(count + 1)
        // } else {
        //     setCount(count-1)
        // }
      }


    useEffect(async () => {
        await props.FetchAllVideos()
    }, [])

    return (
        <div>
            <YoutubeHeader onSearch={onSearch} />
            <FavouriteCounter  count={props.FavouriteVideos.length}/>
            <div className="content-container__videos">
            {Videos && Videos.length ? (<VideoList
                 data={Videos}
                 addToFavourite={addToFavourite}
                 FavouriteVideos={FavouriteVideos}
                  /> ) 
                  : (
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
    FetchAllVideos: () => dispatch(FetchAllVideos()),
    FetchSearchedVideos: (keyword) => dispatch(FetchSearchedVideos(keyword)),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
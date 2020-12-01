import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { FetchAllVideos, FetchSearchedVideos } from '../store/videos/videos.actions';
import YoutubeHeader from '../components/YoutubeHeader';
import VideoList from '../components/VideoList';
import FavouriteCounter from '../components/FavouriteCounter';
import {  AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';
import { selectFavouriteVideos, selectVideosFromFavourites } from '../store/favourites/favourites.selector';


const FavouritePage = (props) => {
    const { Videos, FavouriteVideos, selectVideosFromFavourites } = props;
    // let result = FavouriteVideos &&Videos.filter(o1 => FavouriteVideos.some(o2 => o1.id === o2));
    // console.log("result", result)
    console.log("Favourites", FavouriteVideos)
    console.log("VIdeos", Videos)
  


    const onSearch = async keyword => {
       if(keyword) {
           console.log("ggg", keyword)
        await props.FetchSearchedVideos(keyword);
       } else {
        await props.FetchAllVideos();
       }
        console.log("videos", Videos)

    }

    const addToFavourite = async(videoId) => {
        const {FavouriteVideos} = props;
         console.log("favouritevideo", FavouriteVideos)
        !FavouriteVideos.length ?
         props.AddToFavourites(videoId) :
        FavouriteVideos.includes(videoId) ?
            props.RemoveFromFavourites(videoId) :
              props.AddToFavourites(videoId)
      }

    useEffect(() => {
     console.log("ccc", selectVideosFromFavourites)
    }, [])

  

    return (
        <div>
        <YoutubeHeader onSearch={onSearch}/>
        <FavouriteCounter  count={props.FavouriteVideos.length}/>
        {
            selectVideosFromFavourites && selectVideosFromFavourites.length ? (
                <div className="content-container__videos">
                  <VideoList
                   data={selectVideosFromFavourites}
                   addToFavourite={addToFavourite}
                   FavouriteVideos={FavouriteVideos}
                    /> 
                </div>
            ) :  (<div className="favourates-message-container">
            <p>No Favourites Selected</p>
        </div>)
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    Videos: state.VideosReducer.Videos,
    FavouriteVideos: selectFavouriteVideos(state),
    selectVideosFromFavourites: selectVideosFromFavourites(state)
})

const mapDispatchToProps = (dispatch) => ({
    FetchAllVideos: () => dispatch(FetchAllVideos()),
    FetchSearchedVideos: () => dispatch(FetchSearchedVideos()),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage);
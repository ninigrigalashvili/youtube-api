import React  from 'react';
import { connect } from 'react-redux';
import { FetchSearchedVideos } from '../store/videos/videos.actions';
import YoutubeHeader from '../components/YoutubeHeader';
import VideoList from '../components/VideoList';
import FavouriteCounter from '../components/FavouriteCounter';
import {  AddToFavourites, RemoveFromFavourites } from '../store/favourites/favourites.actions';
import { selectFavouriteVideos } from '../store/favourites/favourites.selector';


const FavouritePage = (props) => {
    const { Videos, FavouriteVideos } = props;
    console.log("Favourites", FavouriteVideos)
    console.log("VIdeos", Videos)
    let result = FavouriteVideos &&Videos.filter(o1 => FavouriteVideos.some(o2 => o1.id === o2));
    console.log("result", result)


    const onSearch = async keyword => {
        await props.FetchSearchedVideos(keyword);
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

  

    return (
        <div>
        <YoutubeHeader onSearch={onSearch}/>
        <FavouriteCounter  count={props.FavouriteVideos.length}/>
        {
            result && result.length ? (
                <div className="content-container__videos">
                  <VideoList
                   data={result}
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
    FavouriteVideos: selectFavouriteVideos(state)
})

const mapDispatchToProps = (dispatch) => ({
    FetchSearchedVideos: () => dispatch(FetchSearchedVideos()),
    AddToFavourites: (id) => dispatch(AddToFavourites(id)),
    RemoveFromFavourites: (id) => dispatch(RemoveFromFavourites(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage);
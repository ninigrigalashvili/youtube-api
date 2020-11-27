import React from "react";
import Video from "./Video";
import Loading from './Loading';

const VideoList = ({ data, addToFavourite,  FavouriteVideos}) => {
  return (
    <React.Fragment>
    {
      data && data.length ? (
        <div className="video-list">
           <Video
            data={data}
            addToFavourite={addToFavourite}
            FavouriteVideos={FavouriteVideos}
             />
        </div> 
      ) :  <Loading />     
    }
    </React.Fragment>
  );
};

export default VideoList;
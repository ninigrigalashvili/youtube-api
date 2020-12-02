import React, { useState } from "react";
import moment from 'moment';
import { history } from '../routers/AppRouter';
import VideCard from './VideoCard';

const Video = ({ data, addToFavourite,  FavouriteVideos }) => {

  const [selectedVideoId, setSelectedVideoId] = useState(null);


  const onVideoSelected = videoId => {
    setSelectedVideoId(videoId)
  }
  
  const selectVideo = async (videoObj, onVideoSelected) => {
    typeof videoObj === 'object' ?
      history.push(`/singleVideo/${videoObj.videoId}`) :
      history.push(`/singleVideo/${videoObj}`)

    typeof videoObj === 'object' ?
      await onVideoSelected(videoObj.videoId) :
      await onVideoSelected(videoObj);

  }

  const viewCountFormatter = (viewCount) => {
    return viewCount > 999 && viewCount <= 999999 ? (viewCount / 1000).toFixed(1) + 'K' :
      viewCount >= 999999 ? (viewCount / 1000000).toFixed(1) + 'M' : viewCount;
  }



  return data.map(({ snippet, id, statistics }, index) => {
    let viewCount = statistics ? statistics.viewCount : '';
    let { channelTitle, publishedAt } = snippet;


    let mystyle = {
      background: `url(${snippet.thumbnails.high.url}) center no-repeat`,
      height: '182px',
      width: '282px'
    }

    return (
      <div className="video__container" key={index}>
        <div className="heart-icon-container" onClick={() => addToFavourite(id)}>
           <div className="heart-icon">
          {
              <i className={`${FavouriteVideos.includes(typeof id === 'object' ? id.videoId : id)
                ? 'fas' : 'far'} fa-heart`}></i> 
          }
          </div>
        </div>
        <div className="video-container">
          <VideCard
            styleName={mystyle}
            title={snippet.title}
            viewCount={viewCount}
            onClick={() => selectVideo(id, onVideoSelected)}
          >
            <span>{channelTitle}</span>
            <span className="video__subcontainer">
              <span>{moment(publishedAt).fromNow()}</span>
              <span className="dot__grey"></span>
              {viewCount && (<span>{viewCountFormatter(viewCount)} views</span>)}
            </span>
          </VideCard>
        </div>
      </div>
    );
  });
};

export default Video;
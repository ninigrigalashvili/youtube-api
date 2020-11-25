import React, {useState} from "react";
import moment from 'moment';
import  {history} from '../routers/AppRouter';
import VideCard from './VideoCard';

const Video = ({ data }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null)

  const onVideoSelected = videoId => {
      console.log("videoId", videoId)
      setSelectedVideoId(videoId)
  }

  const selectVideo = async(videoObj, onVideoSelected) => {
    typeof videoObj === 'object' ? 
     history.push(`/singleVideo/${videoObj.videoId}`) :
     history.push(`/singleVideo/${videoObj}`)

     typeof videoObj === 'object' ? 
     await onVideoSelected(videoObj.videoId)  :
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
      <VideCard
        styleName={mystyle}
        key={index}
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
    );
  });
};

export default Video;
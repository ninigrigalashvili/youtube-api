import React, { useEffect } from "react";
import VideoComment from "./VideoComment";
import VideoConnect from './VideoComment';
 
const Videoplayer = ({ videoId, comments }) => {

  useEffect(async () => {
    console.log("comments", comments)

  }, [])



  return (
    <div>
      <div className="video-player">
        <iframe
          title={videoId}
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </div>
      <div className="video-comments">
        {
          comments && comments.length && comments.map(comment => {
            const { textOriginal, authorDisplayName, authorProfileImageUrl,likeCount, updatedAt } = comment.snippet.topLevelComment.snippet;
            return (
                <VideoComment
                 text={textOriginal}
                 author={authorDisplayName}
                 authorProfileImageUrl={authorProfileImageUrl}
                 likeCount={likeCount}
                 updatedAt={updatedAt}
                 />
            )

          })
        }
      </div>
    </div>
  )

};


export default Videoplayer;
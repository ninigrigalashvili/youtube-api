import React from "react";
import VideoComment from "./VideoComment";
 
const Videoplayer = ({ videoId, comments }) => {


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
          comments && comments.length && comments.map((comment, index) => {
            const { textOriginal, authorDisplayName, authorProfileImageUrl,likeCount, updatedAt, publishedAt } = comment.snippet.topLevelComment.snippet;
            return (
                <VideoComment
                key={index}
                 text={textOriginal}
                 author={authorDisplayName}
                 authorProfileImageUrl={authorProfileImageUrl}
                 likeCount={likeCount}
                 updatedAt={updatedAt}
                 publishedAt={publishedAt}
                 />
            )

          })
        }
      </div>
    </div>
  )

};


export default Videoplayer;
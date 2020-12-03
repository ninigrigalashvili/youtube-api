import React from 'react';
import moment from 'moment';

const VideoComment = ({ text, author, authorProfileImageUrl, likeCount, updatedAt }) => {
    return (
            <div className="video-comments__comment">
                <div className="author-img__container">
                    <img className="author-img" src={authorProfileImageUrl} />
                </div>
                <div className="meta-info__container">
                    <div className="comment-author">
                        <span>{author}</span>
                        <span>{moment(updatedAt).fromNow()}</span>
                    </div>
                    <div className="comment-text">{text}</div>
                    <div className="likes-container">
                        <i class="far fa-thumbs-up"></i>
                        <span>{likeCount !== 0 ? likeCount : ''}</span>
                        <i class="far fa-thumbs-down"></i>
                        <span>REPLY</span>
                    </div>
                </div>

            </div>
    )
}

export default VideoComment;
import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import VideoList from '../components/VideoList';

const VideoRecommendations = ({ RecommendedVideos, FavouriteVideos, addToFavourite }) => {
    useEffect(async () => {

    }, [])
    return (
        <div>
            <div className="content-container__videos">
                {
                    RecommendedVideos && RecommendedVideos.length ? (<VideoList
                        data={RecommendedVideos}
                        addToFavourite={addToFavourite}
                        FavouriteVideos={FavouriteVideos}
                    />) :
                        (
                            <Loading />
                        )
                }
            </div>

        </div>
    )
}

export default VideoRecommendations;
import React, {useEffect}  from 'react';
import Videoplayer from '../components/VideoPlayer';
import YoutubeHeader from '../components/YoutubeHeader';

const SingleVideoPage = (props) => {

    const videoId = props.location.pathname.split('/')[2];
    useEffect(async () => {
        console.log("ggg", props.location.pathname.split("/")[2])
    }, [])


 
    return (
        <div>
            <YoutubeHeader />
            <Videoplayer  videoId={videoId}/>
        </div>
    )
}



export default SingleVideoPage;
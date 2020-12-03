import React, {useEffect}  from 'react';
import Videoplayer from '../components/VideoPlayer';
import YoutubeHeader from '../components/YoutubeHeader';
import { connect } from 'react-redux';
import { FetchVideoComments } from '../store/videos/videos.actions';
import { selectComments } from '../store/videos/videos.selector';

const SingleVideoPage = (props) => {
    const {Comments} = props;
    const videoId = props.location.pathname.split('/')[2];
    useEffect(async () => {
        console.log("ggg", props.location.pathname.split("/")[2])
    }, [])

    useEffect(async () => {
         const response =  await  props.FetchVideoComments(videoId)
    console.log("zzzzz",response)
    }, [])

 
    return (
        <div>
            <YoutubeHeader />
            <Videoplayer  videoId={videoId} comments={Comments}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Comments: selectComments(state)
  })
  
  
  
  const mapDispatchToProps = (dispatch) => ({
    FetchVideoComments: (id) => dispatch(FetchVideoComments(id))
  })
  
  

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideoPage)
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import YoutubeHeader from '../components/YoutubeHeader';
import { selectVideos } from '../store/videos/videos.selector';
import {FetchAllVideos, FetchSearchedVideos} from '../store/videos/videos.actions';
import VideoList from '../components/VideoList';

const MainPage = (props) => {
    const { Videos} = props;
    const [videoMetaInfo, setvideoMetaInfo] = useState([])

    const onSearch = async keyword => {
        console.log("keyword", keyword)
        if(keyword) {
            const response = await props.FetchSearchedVideos(keyword)
            await console.log("response", response)
            setvideoMetaInfo(response)
        } else {
            await props.FetchAllVideos()
            setvideoMetaInfo(Videos)
        }
    }

    
    useEffect(async() => {
         await props.FetchAllVideos()
        setvideoMetaInfo(Videos)
    }, [])
    
    return (
        <div>
        <YoutubeHeader onSearch={onSearch} />
           <div className="content-container__videos">
            <VideoList data={Videos}/>
        </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    Videos: selectVideos(state)
  })

  const mapDispatchToProps = dispatch => ({
      FetchAllVideos: () => dispatch(FetchAllVideos()),
      FetchSearchedVideos: (keyword) => dispatch(FetchSearchedVideos(keyword))
  })

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
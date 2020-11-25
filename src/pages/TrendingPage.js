import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import VideoList from '../components/VideoList';
import YoutubeHeader from '../components/YoutubeHeader';
import { connect } from 'react-redux';
import { FetchTrendingVideos, FetchSearchedVideos } from '../store/videos/videos.actions';
import { selectVideos } from '../store/videos/videos.selector';

const TrendingPage = (props) => {
    const { Videos } = props;
    const [videoMetaInfo, setvideoMetaInfo] = useState([])

    const onSearch = async keyword => {
        console.log("keyword", keyword)
        if (keyword) {
            const response = await props.FetchSearchedVideos(keyword)
            setvideoMetaInfo(response)
        } else {
            await props.FetchTrendingVideos();
            setvideoMetaInfo(Videos)
        }
    }

    useEffect(async () => {
        await props.FetchTrendingVideos();
        console.log("response", Videos);
        setvideoMetaInfo(Videos)
    }, [])
    return (
        <div>
            <YoutubeHeader onSearch={onSearch} />
            <div className="content-container__videos">
                {
                    Videos && Videos.length ? (
                        <VideoList data={Videos} />

                    ) : (
                            <Loading />
                        )
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    Videos: selectVideos(state)
})

const mapDispatchToProps = dispatch => ({
    FetchTrendingVideos: () => dispatch(FetchTrendingVideos()),
    FetchSearchedVideos: (keyword) => dispatch(FetchSearchedVideos(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
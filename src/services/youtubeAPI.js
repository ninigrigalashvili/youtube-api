import ApplicationApi from '../utilities/api';
import {api_key as key } from '../config/youtube.js';


    export const fetchSearchedVideos =  (keyword) => {
        return ApplicationApi.get('/search', {
            params: {
                q: keyword,
                part: 'snippet' ,
                maxResults: 30,
                key,
                type: "video"           }
        }).then((res) => {
            console.log("searched-----response", res)
            return res.data.items
        })
      };
      export const fetchAllVideos = () => {
          return ApplicationApi.get('/videos', {
            params: {
                part: 'statistics, snippet',
                chart: 'mostPopular',
                videoCategoryId: '10',
                maxResults: 30,
                key,
                type: "video"
            }
          }).then((res) => {
              console.log('/allVideos------>', res)
              return res.data.items;
          })
      };
     export const fetchTrendingVideos= () => {
        return ApplicationApi.get('/videos', {
            params: {
                part: 'statistics, snippet',
                chart: 'mostPopular',
                maxResults: 30,
                key,
                type: "video"
                        }
          }).then((res) => {
              console.log('/Trendingvideos------>', res)
              return res.data.items;
          })
      };

      export const fetchVideoComments = (videoId) => {
        return ApplicationApi.get('/commentThreads', {
            params: {
                part: 'snippet, replies',
                videoId,
                key
            }
        }).then((res) => {
            console.log('/videoComments---->', res.data.items)
            return res.data.items;
        })  
    };

    export const fetchRecommendedVideos = () => {
        return ApplicationApi.get('/activities', {
            params: {
                part: 'snippet,contentDetails',
                key,
                channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
                maxResults: 8,
                uploadType: 'video'
            }
        }).then((res) => {
            console.log("/activities------>", res.data.items)
            return res.data.items;
        })
    }

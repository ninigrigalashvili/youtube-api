import ApplicationApi from '../utilities/api';

function YoutubeAPIService() { 
    this.fetchSearchedVideos = function (keyword) {
        return ApplicationApi.get('/search', {
            params: {
                q: keyword,
                part: 'snippet'            }
        }).then((res) => {
            console.log("searched-----response", res)
            return res.data.items
        })
      };
      this.fetchAllVideos = function() {
          return ApplicationApi.get('/videos', {
            params: {
                part: 'statistics, snippet',
                chart: 'mostPopular',
                videoCategoryId: '10'
            }
          }).then((res) => {
              console.log('/allVideos------>', res)
              return res.data.items;
          })
      };
      this.fetchTrendingVideos= function() {
        return ApplicationApi.get('/videos', {
            params: {
                part: 'statistics, snippet',
                chart: 'mostPopular'
                        }
          }).then((res) => {
              console.log('/Trendingvideos------>', res)
              return res.data.items;
          })
      }
}

export default YoutubeAPIService;
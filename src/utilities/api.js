import axios from 'axios';
import {api_key as key, baseURL} from '../config/youtube.js';



const ApplicationApi  = axios.create({
    baseURL,
    params: {
      maxResults: 30,
      key,
      type: "video"
    },
    options: {
      body: {},
      headers: {}
    }
  });

export default ApplicationApi;
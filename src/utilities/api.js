import axios from 'axios';
import { baseURL } from '../config/youtube.js';



const ApplicationApi = axios.create({
  baseURL,
  params: {},
  options: {
    body: {},
    headers: {}
  }
});

export default ApplicationApi;
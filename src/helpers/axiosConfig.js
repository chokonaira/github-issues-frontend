import axios from 'axios';

// A helper function that takes a dynamic url argument and returns an axios instance.

export default (baseURL) => (
  axios.create({
    baseURL,
  }));

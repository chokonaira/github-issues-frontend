import axios from 'axios';
import axiosConfig from '@/helpers/axiosConfig';

jest.mock('axios');

describe('axiosConfig.js', () => {
  it('returns an axios instance with a giving url', () => {
    const baseURL = 'http.github.com';
    axiosConfig(baseURL);
    expect(axios.create).toHaveBeenCalledWith({ baseURL });
  });
});

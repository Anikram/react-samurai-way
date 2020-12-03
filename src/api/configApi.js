import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '49f47d89-c3ab-4754-9522-02a2d4146f89'
  }
});

export default axiosInstance;

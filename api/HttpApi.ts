import { cookieNames } from '@newsletter/constants/cokieNames';
import axios from 'axios';
import Cookies from 'js-cookie';

export const apiUrl = process.env.NEXT_PUBLIC_AUTH_URL;
const lastToken = Cookies.get(cookieNames.bevnet_token);

const config = {
  headers: {
    Authorization: `Bearer ${lastToken}`
  }
};

export const HttpApi = {
  get: (url: string) => (axios.get(`${apiUrl}${url}`, config)
    .then((apiResp) => apiResp.data)),

  post: (url: string, body: any) => (
    axios.post(`${apiUrl}${url}`, body, config)
      .then((apiResp) => apiResp.data)
  ),

  put: (url: string, body: any) => (
    axios.put(`${apiUrl}${url}`, body, config)
      .then((apiResp) => apiResp)
  ),

  delete: (url: string) => (
    axios.delete(`${apiUrl}${url}`, config)
      .then((apiResp) => apiResp.data)
  ),

  postFile: (url: string, body: any) => (
    axios.post(`${apiUrl}${url}`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${lastToken}`
      }
    })
      .catch((err: any) => err?.response)
  ),
};

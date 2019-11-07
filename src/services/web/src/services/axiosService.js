import axios from 'axios';
import {
  getToken
} from '../utils/common';

class _AxiosService {
  instance = null;

  constructor() {
    this.instance = axios.create({
      headers: this._getHeaders()
    });
    this.instance.interceptors.request.use(this._interceptBeforeRequest, this._interceptRequestError);
    this.instance.interceptors.response.use(this._interceptResponseData, this._interceptResponseError);
  }

  _getHeaders() {
    const token = getToken();

    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  _interceptBeforeRequest(config) {
    if (!config.url) {
      return Promise.reject('[AxiosService] URL must not be blank');
    }

    return config;
  }

  _interceptRequestError(error) {
    // Do something with request error
    return Promise.reject(error);
  }

  _interceptResponseData(response) {
    // Do something with response data
    return response;
  }

  _interceptResponseError(error) {
    // Do something with response error
    return Promise.reject(error);
  }


  get(url, params = {}, config = {}) {
    return this.instance.get(url, {
      params,
      ...config
    });
  }

  post(url, data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config) {
    return this.instance.put(url, data, config);
  }

  patch(url, data, config = {}) {
    return this.instance.patch(url, data, config);
  }

  delete(url, params = {}, config = {}) {
    return this.instance.delete(url, {
      params
    }, config);
  }
}

export const AxiosService = new _AxiosService();
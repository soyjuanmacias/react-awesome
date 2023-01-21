import axios from 'axios';
import { removeSpinner, startSpinner } from '../state/global.actions';

const { MODE } = import.meta.env;

/**
 * Provider: axios, fetch...
 * baseUrl: (server route) https://localhost:3000
 * prefix: if api has prefix (in our case /api/v1/)
 */
class HttpFactory {
  constructor(provider, baseUrl, prefix = '') {
    this.provider = provider;
    this.baseUrl = baseUrl;
    this.url = `${baseUrl}${prefix}`;
  }

  setConfig() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.baseUrl,
      },
      withCredentials: true,
      timeout: 3000,
    };
  }

  request(path, options, data = {}) {
    options.spinner && startSpinner(options.spinner);
    
    const config = { url: this.url + path, data, ...this.setConfig(), ...options };

    return this.provider(config)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log('[SERVER ERROR]: ', error.response.data.message);
      })
      .finally(() => options.spinner && removeSpinner(options.spinner));

    // TODO Crear Interceptor de errores siguiendo Interceptor Error pattern;
  }

  get(path, options) {
    return this.request(path, { method: 'get', ...options });
  }

  post(path, data, options) {
    return this.request(path, { method: 'post', ...options }, data);
  }

  put(path, data, options) {
    return this.request(path, { method: 'put', ...options }, data);
  }

  delete(path, options) {
    return this.request(path, { method: 'delete', ...options });
  }
}

// TODO create enviroments and get here auto back url

const servers = {
  dev: 'http://localhost:4000',
  prod: 'TODOTODOTOD',
};

export const http = new HttpFactory(axios, servers[MODE], '/api/v1');

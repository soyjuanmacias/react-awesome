import axios from 'axios';

const apiPrefix = '/api/v1';
const baseURL = `http://localhost:4000${apiPrefix}`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4000',
  withCredentials: true,
};

const timeout = 3000;

const config = {
  baseURL,
  timeout,
  headers,
  withCredentials: true,
};

const http = axios.create({ ...config });

export default http;
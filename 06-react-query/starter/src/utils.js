import axios from 'axios';

// Create a custom axios instance with a base URL
const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customFetch;

import axios from 'axios';

let API_URL = 'https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task';

export const fetchEvent = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

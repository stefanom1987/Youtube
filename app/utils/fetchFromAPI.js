import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      console.log('Risposta API:', data);
      return data;
    }
    catch (error) {
      console.error('Errore chiamata API:', error);
      throw error;
    }
  }
  
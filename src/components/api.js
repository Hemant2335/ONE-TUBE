import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  method: 'GET',
  params: {hl: 'en', gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'eeb0daffaemshccbcbf498419aaep180623jsn592c72a006e4',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchapidata=async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data ; 
}

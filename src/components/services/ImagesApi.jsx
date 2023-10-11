import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '38938100-b936ed9173255b3eb24e79faf';

const imagesApi = async (query, page) => {
  const { data } = await axios.get(
    `/?key=${API_KEY}&q=${query}
    &page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data.hits;
};

export default imagesApi;

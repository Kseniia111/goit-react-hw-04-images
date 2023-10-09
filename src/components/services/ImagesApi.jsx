import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '38938100-b936ed9173255b3eb24e79faf';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `/?key=${API_KEY}&q=${searchQuery}
    &page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(({ data }) => data.hits);
};
const api = {
  fetchImages,
};

export default api;

import axios from 'axios';

let currentPage = 1;
let lastSearchedValue = '';

export const fetchFotos = async searchedValue => {
  if (searchedValue !== lastSearchedValue) {
    currentPage = 1;
    lastSearchedValue = searchedValue;
  }

  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '45483609-d3ae590ff20ddbd4abc31de80',
        q: searchedValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,
      },
    });

    currentPage += 1;

    return response.data;
  } catch (error) {
    console.error('Error fetching fotos:', error);
    throw error;
  }
};

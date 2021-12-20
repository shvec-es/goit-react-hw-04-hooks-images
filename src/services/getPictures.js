function fetchPictures(searchName, page = `1`) {
  const API_KEY = `key=23963114-6d0d5d874ae460d9125bacd21`;

  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&${API_KEY}`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something wrong...'));
    })
    .catch(err => console.log(err));
}

export default fetchPictures;

import { useState } from 'react';
import fetchPictures from '../services/getPictures';
import { toast } from 'react-toastify';

function usePictureApi(searchName, page) {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  setStatus('pending');

  fetchPictures(searchName, page)
    .then(data => {
      if (data.hits.length > 0) {
        setPictures(prevPictures => [...prevPictures, ...data.hits]);
        setStatus('resolved');
      } else {
        setStatus('idle');
        toast.error('Enter correct querry');
      }
    })
    .catch(error => {
      setStatus('rejected');
      setError(error);
    });

  return { pictures, error, status };
}

export default usePictureApi;

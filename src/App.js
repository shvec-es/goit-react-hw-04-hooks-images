import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

function App() {
  const [searchName, setSearchName] = useState('');

  const handleSearchbar = searchName => {
    setSearchName(searchName);
  };

  return (
    <div>
      <ToastContainer autoClose={3000} theme="colored" />
      <Searchbar onSubmit={handleSearchbar} />
      <ImageGallery searchName={searchName} />
    </div>
  );
}

export default App;

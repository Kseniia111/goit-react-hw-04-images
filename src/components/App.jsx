import { useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import imagesApi from './services/ImagesApi';
import ButtonLoadMore from './Button/ButtonLoadmore';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        const request = await imagesApi(query, page);
        if (request.length === 0) {
          return alert(`That is it. Try something else!`);
        }
        setImages(prevImages => [...prevImages, ...request]);
      } catch (error) {
        alert('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const searchImages = newSearch => {
    setQuery(newSearch);
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    scrollPage();
  };

  const onOpenModal = ({ largeImageURL }) => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollPage = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
      <Searchbar onHandleSubmit={searchImages} />
      {images.length > 0 && !error && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {isLoading && <Loader />}
      {!isLoading && images.length >= 12 && !error && (
        <ButtonLoadMore onLoadMore={onLoadMore} />
      )}
      {showModal && (
        <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
}

export default App;

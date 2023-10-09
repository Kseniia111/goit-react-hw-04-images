import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li className={css.imageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={css.imageGalleryItemImage}
      onClick={() => onClick({ largeImageURL, tags })}
    />
  </li>
);

export default ImageGalleryItem;

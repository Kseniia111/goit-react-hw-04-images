import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => (
  <li className={css.imageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={css.imageGalleryItemImage}
      onClick={() => onOpenModal({ largeImageURL, tags })}
    />
  </li>
);

export default ImageGalleryItem;

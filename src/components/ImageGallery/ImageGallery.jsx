import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
// export class ImageGallery extends Component {
//   render() {
//     const { images, onImageClick } = this.props;
//     return (
//       <ul className={css.imageGallery}>
//         {images.map(({ id, webformatURL, largeImageURL }) => (
//           <ImageGalleryItem
//             key={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             onImageClick={onImageClick}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

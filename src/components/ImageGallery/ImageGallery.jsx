import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// export class ImageGallery extends Component {
//   render() {
//     const { images, onOpenModal } = this.props;
//     return (
//       <ul className={css.imageGallery}>
//         {images.map(({ id, webformatURL, largeImageURL }) => (
//           <ImageGalleryItem
//             key={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             onOpenModal={onOpenModal}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

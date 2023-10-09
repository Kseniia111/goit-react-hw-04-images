import { ColorRing } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '9999',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Loader;
// export class Loader extends Component {
//   render() {
//     return (
//       <ColorRing
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="blocks-loading"
//         wrapperStyle={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//           margin: '0 auto',
//           position: 'fixed',
//           top: '0',
//           left: '0',
//           right: '0',
//           bottom: '0',
//           zIndex: '9999',
//         }}
//         wrapperClass="blocks-wrapper"
//         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//       />
//     );
//   }
// }

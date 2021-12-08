
import {GlobalStylestyles} from '../styles/GlobalStyle.styles';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Provider store={store}>
  <Component {...pageProps} />
  <GlobalStylestyles/>
  </Provider>
  </>
  );
}

export default MyApp

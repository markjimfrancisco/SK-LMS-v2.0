import '../styles/globals.css';
import 'animate.css';
import "quill/dist/quill.core.css";
import 'quill/dist/quill.snow.css';


import { wrapper } from "../redux/store/store";
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);

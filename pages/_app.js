import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store'
import { createWrapper } from "next-redux-wrapper";

let reduxStore
const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return store;
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = store;
  }

  return reduxStore;
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const wrapper = createWrapper(getOrInitializeStore);

export default wrapper.withRedux(MyApp)

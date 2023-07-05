import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

export default configureStore({
  reducer: reducers,
  middleware: [thunk, logger],
});

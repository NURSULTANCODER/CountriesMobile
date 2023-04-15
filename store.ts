import axios from 'axios';
import {configureStore} from '@reduxjs/toolkit';

import * as api from './config';
import { controlsReducer } from './src/features/controls/controls-slice';
import { countryReducer } from './src/features/countries/countries-slice';
import { detailsReducer } from './src/features/details/details-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      },
    },
    serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
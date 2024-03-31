import {combineReducers, configureStore} from '@reduxjs/toolkit';
// const federatedSlices = lazy(() => 'store/setupStore');
const federatedSlices = {
  layout: await import('store/setupStore'),
};

const rootReducer = combineReducers({
  ...federatedSlices,
});
export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  return store;
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

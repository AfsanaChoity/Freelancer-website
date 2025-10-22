import {combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/userSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { createTransform } from 'redux-persist';

// Transform: inbound (to storage) => remove initialRole
const removeInitialRoleTransform = createTransform(
 
  (inboundState, key) => {
    if (!inboundState) return inboundState;
    const { initialRole, ...rest } = inboundState;
    return rest;
  },
 
  (outboundState, key) => {
    
    return { initialRole: null, ...outboundState };
  },
  { whitelist: ['user'] } 
);

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    transforms: [removeInitialRoleTransform],
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    user: userReducer,
}))

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
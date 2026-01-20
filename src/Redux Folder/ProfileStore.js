import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  myProfile from "./index"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig={
 key:"root",
 storage,
 blacklist:["user"]
}

const rootreducer=combineReducers({
  stored:myProfile
})

const persistedReducer=persistReducer(persistConfig,rootreducer)



const StoredProfile=configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
})

export const persistor=persistStore(StoredProfile)

export default StoredProfile
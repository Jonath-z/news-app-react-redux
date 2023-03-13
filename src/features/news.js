import {createSlice} from "@reduxjs/toolkit";
import localStorageServices from "../utils/localStorageServices";
import {CURRENT_READ_KEY, NEWS_LOCALSTORAGE_KEY} from "../utils/constants";

const latestNewsSlice = createSlice({
    name: "news",
    initialState: {
        value: localStorageServices.getNews(NEWS_LOCALSTORAGE_KEY) || []
    },
    reducers: {
        setLatestNews: (state, action) => {
            state.value = action.payload;
            localStorageServices.setNews(NEWS_LOCALSTORAGE_KEY, state.value);
        }
    }
});

const newsToReadSlice = createSlice({
    name: "currentRead",
    initialState: {
        value: localStorageServices.getNews(CURRENT_READ_KEY) || {},
    },
    reducers: {
        setNewsToRead: (state, action) => {
            state.value = action.payload;
            localStorageServices.setNews(CURRENT_READ_KEY, state.value)
        }
    },
})

export const reducers = {
    latestNewsReducer: latestNewsSlice.reducer,
    newsToReadReducer: newsToReadSlice.reducer
}

export const {setLatestNews} = latestNewsSlice.actions;
export const {setNewsToRead} = newsToReadSlice.actions;


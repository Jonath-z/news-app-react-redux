import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {reducers} from "./features/news";
import {newsApi} from "./features/newsApi"
import {ApiProvider} from "@reduxjs/toolkit/query/react";


const {latestNewsReducer, newsToReadReducer} = reducers;

const store = configureStore({
    reducer: {
        latestNews: latestNewsReducer,
        newsToRead: newsToReadReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApiProvider api={newsApi}>
                <App/>
            </ApiProvider>
        </Provider>
    </React.StrictMode>
);

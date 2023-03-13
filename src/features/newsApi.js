import newsEndpoints from "../utils/endpoints";
import {API_BASE_URL, API_KEY, LATEST_NEWS_MAXIMUM_RESULT_SIZE} from "../utils/constants";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const {topHeadLines, source, sourceNews} = newsEndpoints;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        headers: {
            "X-Api-Key": API_KEY
        },
    }),

    endpoints: (build) => ({
        getGlobalLatestNews: build.query({
            query: (arg) => `${topHeadLines}?pageSize=${LATEST_NEWS_MAXIMUM_RESULT_SIZE}&country=us`,
            transformResponse: (response) => response["articles"]
        }),

        getLatestNewsByCategory: build.query({
            query: (category) => `${topHeadLines}?pageSize=${LATEST_NEWS_MAXIMUM_RESULT_SIZE}?category=${category}`,
            transformResponse: (response) => response["articles"]
        }),

        getPublishers: build.query({
            query: () => `${source}?language=en`,
            transformResponse: (response) => response.sources,
        }),

        getPublishersByCategory: build.query({
            query: (category) => `${source}?category=${category}`,
        }),

        getPublisherNews: build.query({
            query: (publisher) => `${sourceNews}?source=${publisher}`

        })
    })
})

export const {
    useGetGlobalLatestNewsQuery,
    useGetLatestNewsByCategoryQuery,
    useGetPublishersQuery,
    useGetPublishersByCategoryQuery,
    useGetPublisherNewsQuery
} = newsApi;
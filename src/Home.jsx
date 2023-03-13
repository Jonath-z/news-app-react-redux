import NewsCard from "./components/NewsCard";
import {useGetGlobalLatestNewsQuery} from "./features/newsApi";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLatestNews} from "./features/news";
import Publishers from "./components/Publishers";


const Home = () => {
    const {data, isError, isLoading} = useGetGlobalLatestNewsQuery()
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isError && !isLoading) {
            dispatch(setLatestNews(data))
        }
    }, [data, isError, isLoading, dispatch])


    if (!isError && !isLoading)
        return (
            <div className="flex flex-col xl:grid xl:grid-cols-3 gap-10">
                <div className="mt-5 xl:mt-10 relative col-span-3 h-fit xl:h-full">
                    <img
                        src={data[0].urlToImage}
                        alt="last"
                        className="max-w-full w-full h-80 xl:h-full object-cover"
                    />
                    <div className="absolute bottom-0 text-white p-5 xl:p-10 bg-gradient-to-t from-black">
                        <h1 className="text-xl xl:text-5xl md:line-clamp-2">
                            {data[0].title}
                        </h1>
                        <div className="mt-10 text-sm line-clamp-4 xl:text-2xl md:line-clamp-4">
                            {data[0].description}
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 pt-5 xl:pt-10 px-5 xl:px-0">
                    <h2 className="font-bold text-2xl">Latest news</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {data.map((news, index) => (
                            index !== 0 && <NewsCard key={`latest-news-${index}`} news={news} isLastCard={index === 9}/>
                        ))}
                    </div>
                </div>
                <Publishers/>
            </div>
        );
};

export default Home;

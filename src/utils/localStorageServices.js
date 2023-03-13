class LocalStorageServices {
    setNews(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getNews(key) {
        const value = localStorage.getItem(key);
        return JSON.parse(value)
    }
}

const localStorageServices = new LocalStorageServices();
export default localStorageServices;

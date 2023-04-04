const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd0dc8dec394979cca2b76857f2e81c01',
    originalImg: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Img: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
}

export default apiConfig;
import axios from 'axios';

// // Создание экземпляра Axios с базовым URL
// const api = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/', // Замените на URL вашего сервера Django
// });



async function fetchMovies() {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds'); // Замените URL_API на фактический URL вашего API
        console.log(response.data)
        return response.data; // Это массив фильмов
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export default fetchMovies;
// export default api;

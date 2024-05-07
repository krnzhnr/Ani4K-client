import axios from 'axios';

// // Создание экземпляра Axios с базовым URL
// const api = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/', // Замените на URL вашего сервера Django
// });

async function fetchMovies() {
    try {
        const response = await axios.get('http://26.123.33.86:8000/api/releases/');
        console.log(response.data)
        return response.data; // Это массив фильмов
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

export default fetchMovies;
// export default api;

'use client'

import styles from "@/src/app/grid/grid.module.css";
import NewCard from "@/src/app/elements/new_card/newCard";
import Navbar from "@/src/app/elements/navbar/navbar"
import { useEffect, useState } from "react";
import getAnime from "@/src/app/parser";
import axios from "axios";
import Card from "../../elements/card/card";
import fetchMovies from "../../api";


export default function FourK() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const moviesData = await fetchMovies();
            setMovies(moviesData);
        }

        getMovies();
    }, []);

    return (
        <>
            <Navbar />
            <div className={`${styles.container} container`}>
                <h1 className={styles.gridHeader}>Каталог</h1>
                <div className={`${styles.cardList} `}>
                    <div>
                        {movies.map((movie) => (
                            <Card
                                key={movie.id}
                                name={movie.name}
                                temperament={movie.temperament}
                                reference_image_id={movie.reference_image_id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}







//     const [data, setData] = useState(null); // Состояние для хранения данных от API

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.thecatapi.com/v1/images/search');
//                 setData(response.data); // Обновление состояния данными от API
//             } catch (error) {
//                 console.error('Ошибка при получении данных:', error);
//             }
//         };

//         fetchData(); // Вызов функции fetchData при монтировании компонента
//     }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

//     // Здесь может быть ваша разметка, которая использует данные из состояния data

//     return (
//         <>
//             { data &&
//                     <>
//                         {data.map((user) => (
//                             <Card
//                                 key={user.id}
//                                 username={user.username}
//                             />
//                         ))}
//                     </>
//                 }
//         </>
//     );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// export default function FourK() {
//     const [data, setData] = useState(null); // Состояние для хранения данных от API

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://192.168.100.216:8000/users/users/');
//             setData(response.data); // Обновление состояния данными от API
//         } catch (error) {
//             console.error('Ошибка при получении данных:', error);
//         }
//     };

//     return (

//     );
// }



// <>
//     <button onClick={fetchData}>Загрузить данные</button>
//     {data &&
//         <>
//             {data.map((user) => (
//                 <div key={user.id}>
//                     <p>id: {user.id}</p>
//                     <p>url: {user.url}</p>
//                     <p>Имя: {user.username}</p>
//                     <p>email: {user.email}</p>
//                     <p>staff: {user.is_staff ? 'Yes' : 'No'}</p>
//                 </div>
//             ))}
//         </>
//     } {/* Отображение данных */}
// </>

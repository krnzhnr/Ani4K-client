'use client'

import styles from "@/src/app/grid/grid.module.css";
import Card from "@/src/app/elements/card/card";
import Navbar from "@/src/app/elements/navbar/navbar"
import {useEffect, useState} from "react";
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
                <h1 className={styles.gridHeader}>Доступно в 4К</h1>
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



// export default function FourK() {
//     useEffect(() => {
//         import('bootstrap/dist/js/bootstrap.bundle.min.js');
//     }, []);

//     return (
//         <>
//             <Navbar/>
//             <div className={`${styles.container} container`}>
//                 <h1 className={styles.gridHeader}>Доступно в 4K</h1>
//                 <div className={`${styles.cardList} `}>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                 </div>
//             </div>
//         </>
//     )
// }
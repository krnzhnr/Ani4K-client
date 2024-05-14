'use client'

import styles from "@/src/app/grid/grid.module.css";
import Card from "@/src/app/elements/card/card";
import Navbar from "@/src/app/elements/navbar/navbar"
import { useEffect, useState } from "react";
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
                                poster={movie.poster}
                                name={movie.name}
                                description={movie.description}
                                genre={movie.genre}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

'use client'

import styles from "@/src/app/grid/grid.module.css";
import NewCard from "@/src/app/elements/new_card/newCard";
import Navbar from "@/src/app/elements/navbar/navbar"
import { useEffect, useState } from "react";
import fetchMovies from "../../api";
import FilterSideBar from "../../elements/filter/filter";


export default function FourK() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

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
                <h1 className={`${styles.gridHeader} row`}>Каталог</h1>
                <div className={`${styles.gridSidebar} row`}>
                    <div className={`${styles.cardList} col-md-8`}>
                        <>
                            {movies.map((movie) => (
                                <NewCard
                                    key={movie.id}
                                    poster={movie.poster}
                                    name={movie.name}
                                    description={movie.description}
                                    id={movie.id}
                                />
                            ))}
                        </>
                    </div>
                    <FilterSideBar />
                </div>
            </div>
        </>
    );

}
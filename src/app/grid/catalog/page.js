'use client'

import styles from "@/src/app/grid/grid.module.css";
import NewCard from "@/src/app/elements/new_card/newCard";
import Navbar from "@/src/app/elements/navbar/navbar"
import { useEffect, useState } from "react";
import fetchMovies from "../../api";
import FilterSideBar from "../../elements/filter/filter";


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
                <h1 className={`${styles.gridHeader} row`}>Каталог</h1>
                <div className={`${styles.gridSidebar} row`}>
                    <div className={`${styles.cardList} col-md-8`}>
                        <>
                            {movies.map((movie) => (
                                <NewCard
                                    key={movie.id}
                                    username={movie.username}
                                    url={movie.url}
                                    email={movie.email}
                                />
                            ))}
                        </>
                    </div>
                    <FilterSideBar />
                </div>
                {/* <div className={`${styles.cardList} `}>
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
                </div> */}
            </div>
        </>
    );

}
import styles from "@/src/app/elements/scroll-section/scroll-section.module.css";
import Card from "@/src/app/elements/card/card";
import { useEffect, useState } from "react";
import fetchMovies from "../../api";


export default function ScrollSection() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            const moviesData = await fetchMovies();
            setMovies(moviesData);
        }

        getMovies();
    }, []);

    return (
        <section className={`${styles.containerFluid} container-fluid`}>
            <a className={styles.scrollSectionHeader} href="/grid/available-in-4k">
                <h2 className="icon-link icon-link-hover">Сейчас смотрят</h2>
            </a>
            <div className={styles.scrollSectionScroll}>
                <>
                    {movies.map((movie) => (
                        <Card
                            key={movie.id}
                            poster={movie.poster}
                            name={movie.name}
                            description={movie.description}
                            id={movie.id}
                        />
                    ))}
                </>
            </div>
        </section>
    )
}
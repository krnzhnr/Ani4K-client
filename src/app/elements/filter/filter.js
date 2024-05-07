import styles from "@/src/app/elements/filter/filter.module.css"

export default function FilterSideBar() {
    return (
        <div className={`${styles.sidebarContainer} col-md-4`}>
            <h3 className={styles.sidebarHeader}>Фильтр</h3>
            <div className={styles.sidebarBlock}>
                <h4 className={styles.statusHeader}>Статус выхода</h4>
                <div className={styles.sidebarButtonGroup}>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className={`btn-check`}
                            name="options-outlined"
                            id="anounce-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`}
                            htmlFor="anounce-outlined">
                            Анонс
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="ongoing-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="ongoing-outlined">
                            Онгоинг
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="finished-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="finished-outlined">
                            Вышел
                        </label>
                    </div>
                </div>
                <hr />
                <h4>Тип релиза</h4>
                <div className={styles.sidebarButtonGroup}>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className={`btn-check`}
                            name="options-outlined"
                            id="tv-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`}
                            htmlFor="tv-outlined">
                            TV
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="movie-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="movie-outlined">
                            Фильм
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="ova-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="ova-outlined">
                            OVA
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="ona-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="ona-outlined">
                            ONA
                        </label>
                    </div>
                    <div className={styles.sidebarButton}>
                        <input
                            type="checkbox"
                            className="btn-check"
                            name="options-outlined"
                            id="special-outlined"
                            autoComplete="off"
                        />
                        <label className={`${styles.sidebarCheck} btn btn-outline-light`} htmlFor="special-outlined">
                            Спешл
                        </label>
                    </div>
                </div>
                <hr/>
                <h4>Жанр</h4>
            </div>
        </div>
    )
}
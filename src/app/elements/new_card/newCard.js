import styles from "@/src/app/elements/new_card/newCard.module.css"

export default function NewCard({ poster, name, description, genre }) {
    return (
        <a className={styles.cardItem} href="/title">
            <div className={`${styles.card} card mb-3`} >
                <div className={`${styles.cardBottom} row g-0`}>
                    <div className={`${styles.cardImgBlock} col-md-4`}>
                        {/* <div className={styles.gradient}></div> */}
                        <img src={poster} className={`${styles.cardImg} img-fluid rounded-start`} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-truncate fw-semibold">{name}</h5>
                            <p className={`${styles.cardDiscr} card-text text-truncate text-wrap 1h-1`} id="description">
                                {description}
                            </p>
                            <p className={`${styles.cardText} card-text`}>
                                <small className="text-dark-emphasis">
                                    {genre}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

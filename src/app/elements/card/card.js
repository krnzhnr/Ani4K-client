import styles from './card.module.css'

export default function Card({ poster, name, description, genre }) {
    return (
        <a className={styles.cardItem} href="/title">
            <div className={`${styles.card} card text-bg-dark ratio ratio-16x9`}>
                <img src={poster}
                    className={`${styles.cardImg} card-img`} alt="..." />
                <div className={`${styles.cardImgOverlay} card-img-overlay`}>
                    <h5 className={`${styles.cardTitle} card-title text-truncate`}>
                        {name}
                    </h5>
                    <p className={`${styles.cardText} card-text lh-1 fs-6`}>
                        <small>{description}</small>
                    </p>
                    <p className={`${styles.cardText} card-text`}>
                        <small className="text-white-50">{genre}</small>
                    </p>
                </div>
            </div>
        </a>
    )
}
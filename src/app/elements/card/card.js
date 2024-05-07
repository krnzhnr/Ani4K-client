import styles from './card.module.css'

export default function Card({ poster, name, description, id }) {
    return (
        <a className={styles.cardItem} href="/title">
            <div className={`${styles.card} card text-bg-dark ratio ratio-16x9`}>
                <img src={poster}
                    className={`${styles.cardImg} card-img`} alt="..." />
                <div className={`${styles.cardImgOverlay} card-img-overlay`}>
                    <h5 className={`${styles.cardTitle} card-title`}>{name}</h5>
                    <p className={`${styles.cardText} card-text`}>
                        {description}
                    </p>
                    <p className={`${styles.cardText} card-text`}>
                        {id}
                    </p>
                </div>
            </div>
        </a>

    )
}
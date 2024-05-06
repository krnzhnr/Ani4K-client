import styles from './card.module.css'

export default function Card({ name, reference_image_id, temperament}) {
    return (
        <a className={styles.cardItem} href="/title">
            <div className={`${styles.card} card text-bg-dark ratio ratio-16x9`}>
                <img src="https://desu.shikimori.one/uploads/poster/animes/49458/10122a724905043bc17f996b64da7ebd.jpeg"
                    className={`${styles.cardImg} card-img`} alt="..." />
                <div className={`${styles.cardImgOverlay} card-img-overlay`}>
                    {/* <h5 className={`${styles.cardTitle} card-title`}>Заголовок карточки</h5> */}
                    <h5 className={`${styles.cardTitle} card-title`}>{name}</h5>
                    <p className={`${styles.cardText} card-text`}>
                        {/* Это более широкая карточка с вспомогательным текстом ниже в качестве
                        естественного перехода к дополнительному контенту. Этот контент немного
                        длиннее. */temperament}
                    </p>
                    <p className={`${styles.cardText} card-text`}>
                        {/* <small>Последнее обновление 3 мин. назад</small> */}
                        {reference_image_id}
                    </p>
                </div>
            </div>
        </a>

    )
}
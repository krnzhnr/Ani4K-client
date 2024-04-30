import styles from './card.module.css'

export default function Card() {
    return (
        <a className={styles.cardTitle} href="#">
            <div className={`${styles.card} card text-bg-dark`}>
                <img src="https://desu.shikimori.one/uploads/poster/animes/49458/10122a724905043bc17f996b64da7ebd.jpeg"
                     className={`${styles.cardImg} card-img`} alt="..."/>
                <div className={`${styles.cardImgOverlay} card-img-overlay`}>
                    <h5 className={`${styles.cardTitle} card-title`}>Заголовок карточки</h5>
                    <p className={`${styles.cardText} card-text`}>
                        Это более широкая карточка с вспомогательным текстом ниже в качестве
                        естественного перехода к дополнительному контенту. Этот контент немного
                        длиннее.
                    </p>
                    <p className={`${styles.cardText} card-text`}>
                        <small>Последнее обновление 3 мин. назад</small>
                    </p>
                </div>
            </div>
        </a>

    )
}
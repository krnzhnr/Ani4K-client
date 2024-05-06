'use client'

import styles from "../title/title.module.css"
import Navbar from "../elements/navbar/navbar"
import { useEffect } from "react";

export default function Title() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <body className={styles.titleBack}>
            <div className={styles.darkOverlay}></div>
            <Navbar />
            <div className={`${styles.titleContainer} container mt-3`}>
                {/* НАЗВАНИЕ */}
                <div className={`${styles.titleRow} row`}>
                    <div className="col-12">
                        <h1 className={`${styles.titleCenter} text-center`}>Магическая битва 2</h1>
                    </div>
                </div>
                {/* ПОСТЕР И ИНФОРМАЦИЯ */}
                <div className="row">
                    {/* ПОСТЕР */}
                    <div className={`${styles.titlePosterContainer} col-md-4`}>
                        <img
                            src="https://desu.shikimori.one/uploads/poster/animes/56243/260c49a96df8a3b47d21d8f21fdc032c.jpeg"
                            className={`${styles.titlePosterFluid} img-fluid`}
                            alt="Магическая битва 2"
                        />
                        {/* КНОПКА ПЛЕЙ */}
                        <div className="text-center mt-2">
                            <button type="button" className="btn btn-light">
                                В избранное
                            </button>
                        </div>
                    </div>
                    {/* ИНФОРМАЦИЯ */}
                    <div className="col-md-8">
                        <h2 className="serial-info">О сериале</h2>
                        <p className={styles.titleDiscr}>
                            Тридцать первое октября 2018 года, район Сибуя. Множество простых людей
                            заключены под магической завесой и взяты в заложники союзом проклятых
                            духов под началом Махито и Гэто. Всех гражданских обещают выпустить
                            невредимыми только с одним условием: сильнейший маг современности Сатору
                            Годзё должен явиться в Сибую и принять бой. Ученики и преподаватели
                            Магического техникума разбиваются на группы, чтобы быстрее эвакуировать
                            мирных жителей перед началом масштабной битвы. Вместе с тем, сам Сатору
                            Годзё прибывает на место действия и отправляется прямиком к станции.
                            События развиваются согласно плану Сугуру Гэто.
                        </p>
                        <dl className="row">
                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Альтернативное название</dt>
                            <dd className="col-sm-8">Jujutsu Kaisen 2nd Season</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Студия</dt>
                            <dd className="col-sm-8">MAPPA</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Статус</dt>
                            <dd className="col-sm-8">Вышел</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Количество эпизодов</dt>
                            <dd className="col-sm-8">24</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Год выхода</dt>
                            <dd className="col-sm-8">Лето 2023</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Жанры</dt>
                            <dd className="col-sm-8">Экшен, Фэнтези, Школа, Сёнен</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Страна производства</dt>
                            <dd className="col-sm-8">Япония</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Длительность эпизода</dt>
                            <dd className="col-sm-8">23 мин</dd>
                        </dl>
                        <h2>Создатели</h2>
                        <dl className="row">
                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Режиссеры</dt>
                            <dd className="col-sm-8">Сунгу Накамура, Юта Цумура</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Сценарий</dt>
                            <dd className="col-sm-8">Ацуму Миура</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Композиторы</dt>
                            <dd className="col-sm-8">Хироки Цуцуми, Эйса Окахаси, Юта Цумура</dd>

                            <dt className={`${styles.titleDiscrTitle} col-sm-4`}>Актеры</dt>
                            <dd className="col-sm-8">Юити Накамура, Джун Аяма, Акино Хаяно</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </body>
    )
}
import styles from "./navbar.module.css"
import React from "react";
import Image from "next/image";
import Logo from "@/public/next_white.svg"

export default function Navbar() {
    return (

        <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
            <div className={`${styles.containerFluid} container-fluid`}>
                <a className={`${styles.navbarBrand} navbar-brand`} href="/">
                    <Image
                    src={Logo}
                    width={150}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Переключатель навигации"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={`${styles.navbarCollapse} collapse navbar-collapse`} id="navbarNavAltMarkup">
                    <div className={`${styles.navbarNavItems} navbar-nav mr-auto`}>
                        <a className={`${styles.navbarNavLink} nav-link active`} aria-current="page" href="/">
                            Главная
                        </a>
                        <a className={`${styles.navbarNavLink} nav-link`} href="/grid/catalog">
                            Каталог
                        </a>
                        <a className={`${styles.navbarNavLink} nav-link`} href="/grid/available-in-4k">
                            4K UHD
                        </a>
                        <a className={`${styles.navbarNavLink} nav-link disabled`}>Отключенная <span
                            className="badge bg-secondary">Скоро...</span></a>
                    </div>
                    <div className={styles.navbarSearchLogin}>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 align-baseline"
                                type="search"
                                placeholder="Поиск"
                                aria-label="Поиск"
                            />
                            {/* <button class="btn btn-outline-success" type="submit">Поиск</button> */}
                        </form>
                        <div className="form-inline my-2 my-lg-0">
                            <a
                                className="btn btn-outline-success my-2 my-sm-0"
                                href="/auth"
                            >
                                Войти
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

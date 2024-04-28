import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        // <nav className={` ${styles.navbar} `}>
        //     <div className={styles["container-fluid"]}>
        //         <a className={styles['navbar-brand']} href="#">
        //             Ani4K
        //         </a>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-toggle="collapse"
        //             data-target="#navbarNav"
        //             aria-controls="navbarNav"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"/>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className={styles["nav-link"]} href="#">
        //                         Главная
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className={styles["nav-link"]} href="#">
        //                         Каталог
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className={styles["nav-link"]} href="#">
        //                         4K
        //                     </a>
        //                 </li>
        //             </ul>
        //             <form className={styles["d-flex"]} role="search">
        //                 <input
        //                     className={`${styles["form-control"]} me-2 align-baseline`}
        //
        //                     type="search"
        //                     placeholder="Поиск"
        //                     aria-label="Поиск"
        //                 />
        //                 {/* <button class="btn btn-outline-success" type="submit">Поиск</button> */}
        //             </form>
        //             <div className="form-inline my-2 my-lg-0">
        //                 <a
        //                     className="btn btn-outline-success my-2 my-sm-0"
        //                     href="#"
        //                 >
        //                     Войти
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar">
            <div className="navbarLeft">
                <div className="navbarBrand">
                    <a href="#" className="navbarBrandLogo">Ani4K</a>
                </div>
                <div className="navbarNav">
                    <ul className="navbarNavItems">
                        <li className="navbarNavItem">
                            <a href="#" className="navbarNavLink">Link</a>
                        </li>
                        <li className="navbarNavItem">
                            <a href="#" className="navbarNavLink">Link</a>
                        </li>
                        <li className="navbarNavItem">
                            <a href="#" className="navbarNavLink">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbarSearchLogin">
                <form role="search" className="navbarSearch">
                    <input
                        type="search"
                        placeholder="Введите запрос"
                    />
                </form>
                <button>Войти</button>
            </div>
        </nav>

    )
}
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <div className={styles.navbarBrand}>
                    <a href="#" className="navbarBrandLogo">Ani4K</a>
                </div>
                <div className="navbarNav">
                    <ul className={styles.navbarNavItems}>
                        <li className="navbarNavItem">
                            <a href="#" className={styles.navbarNavLink}>Главная</a>
                        </li>
                        <li className="navbarNavItem">
                            <a href="#" className={styles.navbarNavLink}>Каталог</a>
                        </li>
                        <li className="navbarNavItem">
                            <a href="#" className={styles.navbarNavLink}>4К</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.navbarSearchLogin}>
                <form role="search" className={styles.navbarSearch}>
                    <input
                        className="navbarSearchForm"
                        type="search"
                        placeholder="Введите запрос"
                        style={{
                            height: '42px',
                            width: '250px',
                            borderRadius: '20px',
                            paddingLeft: '20px',
                            background: 'white',
                            // border: '2px solid rgba(255, 255, 255, 0.671)',
                            color: 'rgba(255, 255, 255, 0.671)'
                        }}
                    />
                </form>
                <button
                    className={styles.navbarLogin}
                    style={{
                        height: '42px',
                        width: '70px',
                        borderRadius: '20px',
                    }}
                >Войти
                </button>
            </div>
        </nav>


    )
}

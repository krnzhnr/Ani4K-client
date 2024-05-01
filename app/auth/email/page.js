import styles from "@/app/auth/email/email.module.css"

export default function AuthEmail() {
    return (
        <div className={`container-xs ${styles.formContainer}`}>
            <h1 className={styles.formHeader}>Авторизация</h1>
            <div className={`mb-3 ${styles.formLogin}`}>
                <label htmlFor="InputEmail" className="form-label">
                    Электронная почта
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    placeholder="Введите Email..."
                />
            </div>
            <div className={`mb-3 ${styles.formPassword}`}>
                <label htmlFor="InputPassword" className="form-label">
                    Пароль
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                    placeholder="Введите пароль..."
                />
            </div>
            <button type="submit" className={`${styles.btn} btn btn-outline-success`}>
                Войти
            </button>
            <hr className={styles.authSeparator}/>
            <a href="/" className="home-button">
                <button type="button" className={`${styles.btn} btn btn-outline-secondary`}>
                    На главную
                </button>
            </a>
            <a href="/auth" className="home-button">
                <button type="button" className={`${styles.btn} btn btn-outline-secondary`}>
                    Назад
                </button>
            </a>
        </div>
    )
}
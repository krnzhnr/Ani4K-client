import styles from "@/app/elements/scroll-section/scroll-section.module.css";
import Card from "@/app/elements/card/card";

export default function ScrollSection() {
    return (
        <section className={`${styles.containerFluid} container-fluid`}>
            <a className={styles.scrollSectionHeader} href="/grid/available-in-4k">
                <h2 className="icon-link icon-link-hover">Сейчас смотрят</h2>
            </a>
            <div className={styles.scrollSectionScroll}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <div className= {styles.big_banner} >
            <video
                width="100%"
                height="100%"
                muted
                loop
                autoPlay
                className= {styles.big_banner_video}
                src="https://storage.anitype.fun//op_rotate/50205/50205.webm"
            />
        </div>
    );
}
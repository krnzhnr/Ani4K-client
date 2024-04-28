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
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            />
        </div>
    );
}
import styles from "./Card.module.css"

console.log(styles)

export default function Card({image, position, title, desc}) {
    return (
        <a className={styles.card}>
            <div className={styles.left}>
                <img src={image} />
            </div>
            <div className={styles.right}>
                <h3 className={styles.position}>{position}</h3>
                <p className={styles.title}>{title}</p>
                <p className="">{desc}</p>
            </div>

        </a>
    )
}


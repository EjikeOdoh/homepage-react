import styles from './Article.module.css'

export default function Article({title, desc}) {
    return(
        <a className={styles.article}>
            <h3 className={styles.title}>{title}</h3>
            <p>{desc}</p>
        </a>
    )
}
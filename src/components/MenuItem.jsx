import styles from './MenuItem.module.css'

export default function MenuItem({name, url}) {
    return (
        <a href={url} className={styles.menuItem}>{name}</a>
    )
}
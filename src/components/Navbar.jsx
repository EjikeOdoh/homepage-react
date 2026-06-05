import MenuItem from "./MenuItem";


import Logo from '../assets/logo.svg'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={Logo} />
            </div>

            <div className={styles.menu}>
                <MenuItem />
                <MenuItem />
            </div>
        </nav>
    )
}
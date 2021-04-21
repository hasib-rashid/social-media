import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <main>
            <header className={styles.Header}>
                <div className={styles.header__left}>
                    <h3>Actic</h3>
                </div>

                <div className={styles.header__middle}>
                    <img src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" width="20px" height="20px" alt="Some"/>
                    <input type="text" alt="Search Here" />
                </div>
                
                <div className={styles.header__right}>
                    <h3>Profiles</h3>
                </div>
            </header>
        </main>
    )
}

export default Header

import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <main>
            <header className={styles.Header}>
                <div className={styles.header__left}>
                    <h2>Actic</h2>
                </div>

                <div className={styles.header__middle}>
                    <img className={styles.header__icons} src="/images/magnifying-glass.svg" width="20px" height="20px" alt="Search Icon"/>
                    <input type="text" alt="Search Here" />
                </div>
                
                <div className={styles.header__right}>
                    <img className={styles.header__icons} src="/images/add.svg" width="26px" height="26px" alt="Add Icon"/>

                    <img className={styles.header__icons} src="/images/bell.svg" width="26px" height="26px" alt="Add Icon"/>

                    <img className={styles.header__avatar} src="https://www.w3schools.com/howto/img_avatar.png" width="26px" height="26px" alt="Add Icon"/>
                </div>
            </header>
        </main>
    )
}

export default Header

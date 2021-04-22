import React from 'react'
import styles from './Sidebar.module.css'
import SidebarRow from './SidebarRow/SidebarRow'

const Sidebar = () => {
    return (   
        <main className={styles.Sidebar}>
            <SidebarRow text="Hasib Al Rashid" image="https://www.w3schools.com/howto/img_avatar.png" alt="A Alt" />
            <div className={styles.white__icon}>
                <SidebarRow text="Explore" image="https://www.flaticon.com/svg/vstatic/svg/1946/1946473.svg?token=exp=1619077199~hmac=368459814214c02b5d95de5b287555ab" alt="A Alt" />
                <SidebarRow text="Notification" image="https://www.flaticon.com/svg/vstatic/svg/1827/1827422.svg?token=exp=1619079589~hmac=8148a64628df5c0d4d870065a0a02945" alt="A Alt" />
                <SidebarRow text="Messages" image="https://www.flaticon.com/svg/vstatic/svg/561/561127.svg?token=exp=1619079625~hmac=acdb38bf2d1abb2c2246d9516cae1eaa" alt="A Alt" />
                <SidebarRow text="Profile" image="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1619079840~hmac=d79091dad655629be9be6da3f4c0dc2c" alt="A Alt" />
                <SidebarRow text="More" image="https://www.flaticon.com/svg/vstatic/svg/2089/2089792.svg?token=exp=1619079872~hmac=29cacda75ea4f2d8b9920923147349b5" alt="A Alt" />
            </div>
        </main>
    )
}

export default Sidebar

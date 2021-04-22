import React from 'react'
import styles from './Sidebar.module.css'
import SidebarRow from './SidebarRow/SidebarRow'

const Sidebar = () => {
    return (   
        <main>
            <SidebarRow text="Hasib Al Rashid" image="https://www.w3schools.com/howto/img_avatar.png" alt="A Alt" />
        </main>
    )
}

export default Sidebar

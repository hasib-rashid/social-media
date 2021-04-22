import React from 'react'
import style from "./SidebarRow.module.css";

interface Props {
    text: string,
    image: string,
    alt: string,
}

const SidebarRow = (props: Props) => {
    return (
        <main className={style.SidebarRow}>
            <img src={props.image} alt={props.alt} />
            <h3>{props.text}</h3>
        </main>
    )
}

export default SidebarRow

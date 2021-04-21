import React from "react"
import Head from "next/head";
import "../styles/Home.module.css";
import Header from "./components/Header/Header";

const index = () => {
    return (
        <div>
            <Head>
                <title>Custom Title</title>
            </Head>

            <Header />
        </div>
    )
}

export default index

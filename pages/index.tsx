import React from "react"
import Head from "next/head";
import "../styles/Home.module.css";
import Header from "./components/Header/Header";
import FrontPage from "./components/FrontPage/FrontPage";

const index = () => {
    return (
        <div>
            <Head>
                <title>Custom Title</title>
            </Head>

            <div className="FrontEnd">
                <Header />
                <FrontPage />
            </div>
        </div>
    )
}

export default index

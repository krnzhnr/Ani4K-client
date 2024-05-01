'use client'

import styles from "@/app/grid/grid.module.css";
import Card from "@/app/elements/card/card";
import Navbar from "@/app/elements/navbar/navbar"
import {useEffect} from "react";

export default function FourK() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <Navbar/>
            <div className={`${styles.containerFluid} container`}>
                <h1 className={styles.gridHeader}>Доступно в 4K</h1>
                <div className={`${styles.cardList} `}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}
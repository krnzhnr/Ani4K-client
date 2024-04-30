'use client'

import Banner from "@/app/elements/banner/banner";
import Navbar from "@/app/elements/navbar/navbar";
import {useEffect} from "react";
import Card from "@/app/elements/card/card";

export default function Home() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <Navbar/>
            <Banner/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </>
    );
}



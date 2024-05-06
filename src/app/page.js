'use client'

import Banner from "@/src/app/elements/banner/banner";
import Navbar from "@/src/app/elements/navbar/navbar";
import ScrollSection from "@/src/app/elements/scroll-section/scroll-section";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <Navbar/>
            <Banner/>
            <ScrollSection/>
            <ScrollSection/>
        </>
    );
}



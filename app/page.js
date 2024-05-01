'use client'

import Banner from "@/app/elements/banner/banner";
import Navbar from "@/app/elements/navbar/navbar";
import ScrollSection from "@/app/elements/scroll-section/scroll-section";
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



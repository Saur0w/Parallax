"use client";

import {use, useEffect} from "react";
import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import Landing from '@/components/Landing/index';
import Parallax from '@/components/Parallax/index';
import Footer from '@/components/Footer/index';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
    <div className={styles.page}>
        <Landing />
        <Parallax />
        <Footer />
    </div>
  );
}

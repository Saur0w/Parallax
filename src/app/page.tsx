"use client";

import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import Landing from '@/components/Landing/index';
import Parallax from '@/components/Parallax/index';
import Footer from '@/components/Footer/index';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <div className={styles.page}>
        <Landing />
        <Parallax />
        <Footer />
    </div>
  );
}

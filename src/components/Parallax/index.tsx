"use client";

import Image from "next/image";
import styles from './style.module.scss';
import { useRef }  from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
]


export default function Landing() {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.to(containerRef.current, {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    }, []);

    return (
        <div className={styles.landing}>
            <div className={styles.gallery} ref={containerRef}>
                <Column images={[images[0], images[1], images[2]]} />
                <Column images={[images[3], images[4], images[5]]} />
                <Column images={[images[6], images[7], images[8]]} />
                <Column images={[images[9], images[10], images[11]]} />
            </div>
        </div>
    )
}

const Column = ({ images }: { images: string[] }) => {
    return (
        <div className={styles.column}>
            {
                images.map((src, index) => {
                    return <div key={index} className={styles.imageContainer}>
                        <Image src={`/images/${src}`}
                               fill
                               sizes="25vw"
                               alt="image"
                        />
                        </div>
                })
            }
        </div>
    )
}
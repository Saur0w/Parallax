"use client";

import React, { useRef, forwardRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const images: string[] = [
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
    "12.jpg"
];

interface ColumnProps {
    images: string[];
    index?: number;
}

const Column = forwardRef<HTMLDivElement, ColumnProps>(({images}, ref) => {
    return (
        <div className={styles.column} ref={ref}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageContainer}>
                    <Image
                        src={`/images/${src}`}
                        fill
                        alt="image"
                        style={{objectFit: 'cover'}}
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
            ))}
        </div>
    )
})

Column.displayName = 'Column';

export default function Parallax() {

    const containerRef = useRef<HTMLDivElement>(null);
    const column1Ref = useRef<HTMLDivElement>(null);
    const column2Ref = useRef<HTMLDivElement>(null);
    const column3Ref = useRef<HTMLDivElement>(null);
    const column4Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const height = window.innerHeight;

        const columns = [
            { ref: column1Ref, speed: 1.2 },
            { ref: column2Ref, speed: 2.5 },
            { ref: column3Ref, speed: 1.6 },
            { ref: column4Ref, speed: 3 }
        ];

        columns.forEach(({ ref, speed }) => {
            if (!ref.current) return;

            gsap.to(ref.current, {
                y: height * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
    }, { scope: containerRef });

    return (
        <section className={styles.parallax}>
            <div className={styles.gallery} ref={containerRef}>
                <Column images={[images[0], images[1], images[2]]} ref={column1Ref} />
                <Column images={[images[3], images[4], images[5]]} ref={column2Ref} />
                <Column images={[images[6], images[7], images[8]]} ref={column3Ref} />
                <Column images={[images[9], images[10], images[11]]} ref={column4Ref} />
            </div>
        </section>
    )
}


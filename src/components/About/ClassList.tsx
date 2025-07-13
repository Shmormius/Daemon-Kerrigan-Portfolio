import React, { useState, useRef, useEffect } from "react";
import "./ClassList.css";

const CLASSES = [
    "CS-430 Database Systems",
    "CS-415 Software Testing",
    "CS-345 Machine Learning",
    "CS-356 Systems Security",
    "CS-462 Engaging in Virtual Worlds",
    "STAT-315 Intro to Theory and Practice of Statistics",
    "CS-314 Software Engineering",
    "CS-320 Algorithms--Theory and Practice",
    "CT-301 C++ Fundamentals",
    "CS-214 Software Development",
    "CS-370 Operating Systems",
    "DSCI-369 Linear Algebra for Data Science",
    "CS-165 CS2--Data Structures",
    "CS-270 Computer Organization",
    "MATH-156 Mathematics for Computational Science I (GT-MA1)",
    "CS-220 Discrete Structures and their Applications",
    "MATH-126 Analytic Trigonometry (GT-MA1)",
    "CS-164 CS1--Prior Programming Experience",
    "MATH-125 Numerical Trigonometry (GT-MA1)",
    "CCSC 1060 - COMPUTER SCIENCE I (Taken at Colorado Mountain College)",
    "LJPN 480A1 Advanced Japanese Communication Skills",
    "LJPN-305 Third-Year Japanese II",
    "LJPN-304 Third-Year Japanese I",
    "LJPN-301 Japanese Oral Communication",
    "LJPN-201 Second-Year Japanese II",
    "LJPN-200 Second-Year Japanese I",
    "LJPN-101 First-Year Japanese II",
    "LJPN-100 First-Year Japanese I",
];

const BATCH_SIZE = 8;

export default function ClassList() {
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;
        if (
            container.scrollTop + container.clientHeight >=
            container.scrollHeight - 10
        ) {
            setVisibleCount((prev) =>
                Math.min(prev + BATCH_SIZE, CLASSES.length)
            );
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="classlist-scroll-container" ref={containerRef}>
            <ul className="classlist-ul">
                {CLASSES.slice(0, visibleCount).map((className, idx) => (
                    <li key={idx}>{className}</li>
                ))}
            </ul>
            {visibleCount < CLASSES.length && (
                <div className="classlist-loading">Loading more...</div>
            )}
        </div>
    );
}
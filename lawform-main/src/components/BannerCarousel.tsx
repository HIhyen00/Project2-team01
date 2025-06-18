import React, { useState, useEffect } from "react";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";

const banners = [
    {
        src: Banner1,
        alt: "스타트업, 소상공인 계약관리",
    },
    {
        src: Banner2,
        alt: "로폼 플랜 - 저렴한 법률 서비스",
    },
    {
        src: Banner3,
        alt: "개인/기업 맞춤 문서 제공",
    },
];

const BannerCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setIndex((prev) => (prev + 1) % banners.length),
            3000
        );
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-60 md:h-72 lg:h-80 xl:h-96 overflow-hidden rounded-2xl">
            {banners.map((banner, i) => (
                <img
                    key={i}
                    src={banner.src}
                    alt={banner.alt}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                />
            ))}
        </div>
    );
};

export default BannerCarousel;


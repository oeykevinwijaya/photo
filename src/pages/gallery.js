import React, { useState } from "react";
import HeaderGallery from "../components/headerGallery";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

import { Architecture } from "../components/Architecture";
import { Fashion } from "../components/fashion";
import { Foodandbev } from "../components/foodandbev";
import { Drone } from "../components/drone";
import { Event } from "../components/event";
import { Etc } from "../components/etc";

const Gallery = () => {
    const location = useLocation();
    const [selectedMenu, setSelectedMenu] = useState(
        location.state?.selectedMenu || "architecture"
    );
    const sliderIndex = location.state?.sliderIndex || 0;

    return (
        <div className="">
            <HeaderGallery />
            <div className="mx-3">
                <GalleryMenu
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                />
                {selectedMenu === "architecture" && <Architecture />}
                {selectedMenu === "foodandbeverage" && <Foodandbev />}
                {selectedMenu === "fashion" && <Fashion />}
                {selectedMenu === "event" && <Event />}
                {selectedMenu === "drone" && <Drone />}
                {selectedMenu === "etc" && <Etc />}
            </div>
        </div>
    );
};

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                color: "black",
                right: "0",
                zIndex: "1",
                backgroundColor: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        ></div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                color: "black",
                left: "0",
                zIndex: "1",
                backgroundColor: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        ></div>
    );
}

function GalleryMenu({ selectedMenu, setSelectedMenu }) {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
            const newSelectedMenu = menuItems[newIndex];
            setSelectedMenu(newSelectedMenu);
        },
    };

    const menuItems = [
        "architecture",
        "foodandbeverage",
        "fashion",
        "event",
        "drone",
        "etc",
    ];

    // Update slider when selectedMenu changes
    useEffect(() => {
        const currentIndex = menuItems.indexOf(selectedMenu);
        if (currentIndex !== -1 && sliderRef.current) {
            sliderRef.current.slickGoTo(currentIndex);
        }
    }, [selectedMenu]);

    return (
        <Slider
            {...settings}
            className="mt-2 mb-10 bg-gray-200 rounded-lg"
            ref={sliderRef}
        >
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        margin: "0px",
                        padding: "10px",
                        width: "70vw",
                    }}
                    className={`text-md font-semibold underline-offset-8 text-center hover:underline text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                        selectedMenu === item
                            ? "underline underline-offset-8"
                            : ""
                    }`}
                >
                    <Link to="#" onClick={() => setSelectedMenu(item)}>
                        {item}
                    </Link>
                </div>
            ))}
        </Slider>
    );
}

export default Gallery;

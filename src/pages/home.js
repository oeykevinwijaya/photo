import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Cards1 from "../picture/cards-1a.jpg";
import Cards2 from "../picture/cards-2.jpg";
import Cards3 from "../picture/cards-3a.jpg";
import Cards4 from "../picture/cards-4.jpg";
import Cards5 from "../picture/cards-5.jpg";
import Cards6 from "../picture/cards-6.jpg";

import bg1 from "../picture/home1.jpg";
import bg2 from "../picture/home2.jpg";
import bg3 from "../picture/home3.jpg";
import HeaderHome from "../components/headerHome";

const home = () => {
    return (
        <div className="relative">
            {/* <HeaderHome /> */}
            <Content />
            <Cards />
        </div>
    );
};
const Content = () => {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [backgroundImages, setBackgroundImages] = useState([]);

    useEffect(() => {
        // Preload images
        const preloadImages = [bg1, bg2, bg3].map((imageSrc) => {
            const img = new Image();
            img.src = imageSrc;
            return img;
        });

        Promise.all(preloadImages)
            .then(() => {
                setBackgroundImages([bg1, bg2, bg3]);
            })
            .catch((error) => console.error("Error preloading images:", error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex(
                (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [backgroundImages]);

    const styles = {
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
        WebkitTransition: "background-image 1s ease-in-out", // for WebKit browsers (Chrome, Safari)
        MozTransition: "background-image 1s ease-in-out", // for Mozilla browsers (Firefox)
    };

    const overlayColor = "rgba(0, 0, 0, 0.5)";

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: overlayColor,
    };

    const handleScrollPageDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <main className="relative h-screen">
            <HeaderHome />
            <div className="h-full ">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={styles}
                ></div>
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={overlayStyle}
                ></div>
                <div className="h-full flex flex-col justify-center px-[1rem] lg:px-[4rem] relative text-white">
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                        hi people!
                    </h1>
                    <button className="w-1/3 md:w-2/5 lg:w-1/4 lg: py-2 lg:py-[6px] rounded-3xl text-sm lg:text-2xl font-semibold bg-[#7ec4cf] hover:bg-[#7ec4cf] mt-[1rem]">
                        <Link to={"/gallery"}>explore gallery</Link>
                    </button>
                    <FontAwesomeIcon
                        onClick={handleScrollPageDown}
                        icon={faChevronCircleDown}
                        className="inset-x-0 bottom-0 h-10 pt-96 lg:h-14 btnClose bounce-animation"
                        style={{ color: "#7ec4cf" }}
                    />
                </div>
            </div>
        </main>
    );
};

function Cards() {
    const navigate = useNavigate();
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const handleExploreGallery = (selectedMenu, index) => {
        setCurrentBgIndex(index); // Update currentBgIndex
        navigate(`/gallery`, {
            state: { selectedMenu, sliderIndex: currentBgIndex },
        });
    };

    return (
        <div className="flex flex-col mx-5 mt-4">
            <div className="mb-1 text-2xl font-semibold md:mb-3 lg:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                library
            </div>
            <div className="grid grid-cols-12 gap-2 lg:gap-3">
                <div
                    onClick={() => handleExploreGallery("architecture", 0)}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards1}
                        alt="architecture"
                        className="aspect-square object-cover hover:scale-[1.010]"
                    />

                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        architecture
                    </div>
                </div>
                <div
                    onClick={() => handleExploreGallery("foodandbeverage", 1)}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards2}
                        alt="f & b"
                        className="aspect-square object-cover hover:scale-[1.010]"
                    />
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        f & b
                    </div>
                </div>
                <div
                    onClick={() => handleExploreGallery("fashion", 2)}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards3}
                        alt="architecture"
                        className="aspect-square object-cover hover:scale-[1.010]"
                    />
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        fashion
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2 mt-2 lg:gap-3 lg:mt-10">
                <div
                    onClick={() => handleExploreGallery("event")}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards4}
                        alt="event"
                        className="aspect-square object-cover hover:scale-[1.010]"
                    />

                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        event
                    </div>
                </div>
                <div
                    onClick={() => handleExploreGallery("drone")}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards5}
                        alt="drone"
                        className="aspect-square object-cover hover:scale-[1.010]"
                    />
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        drone
                    </div>
                </div>
                <div
                    onClick={() => handleExploreGallery("etc")}
                    className="flex flex-col col-span-4 hover:underline underline-offset-8 hover:cursor-pointer"
                >
                    <img
                        src={Cards6}
                        alt="etc"
                        className=" hover:scale-[1.010] aspect-square object-cover"
                    />
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        etc
                    </div>
                </div>
            </div>
            <FontAwesomeIcon
                icon="fa-solid fa-circle-chevron-down"
                bounce
                style={{ color: "#9e9e9e" }}
            />
        </div>
    );
}

export default home;

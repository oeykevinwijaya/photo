import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./wsp-gallery.css";

const WSPGalleryB = ({ galleryImages }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Previous Image
    const prevSlide = () => {
        setSlideNumber((prevSlide) =>
            prevSlide === 0 ? galleryImages.length - 1 : prevSlide - 1
        );
    };

    // Next Image
    const nextSlide = () => {
        setSlideNumber((prevSlide) =>
            prevSlide + 1 === galleryImages.length ? 0 : prevSlide + 1
        );
    };

    // Keyboard Event Handlers
    const handleKeyDown = (e) => {
        switch (e.key) {
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            case "Escape":
                handleCloseModal();
                break;
            default:
                break;
        }
    };

    // Add event listeners on mount
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div>
            {openModal && (
                <div className="sliderWrap">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="h-8 lg:h-12 btnClose"
                        onClick={handleCloseModal}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronLeft}
                        className="h-8 lg:h-12 btnPrev"
                        onClick={prevSlide}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="h-8 lg:h-12 btnNext"
                        onClick={nextSlide}
                    />
                    <div className="grid grid-cols-2 gap-2 fullScreenImage md:grid-cols-3 md:gap-2 lg:gap-4">
                        <img
                            src={galleryImages[slideNumber].img}
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            )}

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

            <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-2 lg:gap-4 ">
                {galleryImages &&
                    galleryImages.map((slide, index) => {
                        return (
                            <div
                                className="hover:cursor-pointer hover:scale-[1.015]"
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img
                                    src={slide.img}
                                    alt=""
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default WSPGalleryB;

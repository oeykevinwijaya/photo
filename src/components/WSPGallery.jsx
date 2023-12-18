import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./wsp-gallery.css";

const WSPGallery = ({ galleryImages }) => {
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
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    // Next Image
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

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

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:gap-4 ">
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
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default WSPGallery;

import React from "react";
import WSPGalleryC from "./WSPGalleryC";
import drone1 from "../picture/drone/drone1.jpg";
import drone2 from "../picture/drone/drone2.jpg";
import drone3 from "../picture/drone/drone3.jpg";
import drone4 from "../picture/drone/drone4.jpg";
import drone5 from "../picture/drone/drone5.jpg";
import drone6 from "../picture/drone/drone6.jpg";
import drone7 from "../picture/drone/drone7.jpg";
import drone8 from "../picture/drone/drone8.jpg";
import drone9 from "../picture/drone/drone9.jpg";
import drone10 from "../picture/drone/drone10.jpg";
import drone11 from "../picture/drone/drone11.jpg";
import drone12 from "../picture/drone/drone12.jpg";
import drone13 from "../picture/drone/drone13.jpg";
import drone14 from "../picture/drone/drone14.jpg";
import drone15 from "../picture/drone/drone15.jpg";
import drone16 from "../picture/drone/drone16.jpg";
import drone17 from "../picture/drone/drone17.jpg";
import drone18 from "../picture/drone/drone18.jpg";

export const Drone = () => {
    const galleryImages = [
        { img: drone1 },
        { img: drone2 },
        { img: drone3 },
        { img: drone4 },
        { img: drone5 },
        { img: drone6 },
        { img: drone7 },
        { img: drone8 },
        { img: drone9 },
        { img: drone10 },
        { img: drone11 },
        { img: drone12 },
        { img: drone13 },
        { img: drone14 },
        { img: drone15 },
        { img: drone16 },
        { img: drone17 },
        { img: drone18 },
    ];

    return (
        <div className="">
            <WSPGalleryC galleryImages={galleryImages} />
        </div>
    );
};

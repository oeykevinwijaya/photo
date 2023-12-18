import React from "react";
import WSPGalleryC from "./WSPGalleryC";
import etc1 from "../picture/etc/etc1.jpg";
import etc2 from "../picture/etc/etc2.jpg";
import etc3 from "../picture/etc/etc3.jpg";
import etc4 from "../picture/etc/etc4.jpg";
import etc5 from "../picture/etc/etc5.jpg";
import etc6 from "../picture/etc/etc6.jpg";

export const Etc = () => {
    const galleryImages = [
        { img: etc1 },
        { img: etc2 },
        { img: etc3 },
        { img: etc4 },
        { img: etc5 },
        { img: etc6 },
    ];

    return (
        <div className="">
            <WSPGalleryC galleryImages={galleryImages} />
        </div>
    );
};

import React from "react";
import WSPGalleryC from "./WSPGalleryC";
import fam1 from "../picture/fam/fam1.jpg";
import fam2 from "../picture/fam/fam2.jpg";
import fam3 from "../picture/fam/fam3.jpg";
import fam4 from "../picture/fam/fam4.jpg";
import fam5 from "../picture/fam/fam5.jpg";
import fam6 from "../picture/fam/fam6.jpg";
import fam7 from "../picture/fam/fam7.jpg";
import fam8 from "../picture/fam/fam8.jpg";
import fam9 from "../picture/fam/fam9.jpg";
import fam10 from "../picture/fam/fam10.jpg";
import fam11 from "../picture/fam/fam11.jpg";
import fam12 from "../picture/fam/fam12.jpg";
import fam13 from "../picture/fam/fam13.jpg";
import fam14 from "../picture/fam/fam14.jpg";
import fam15 from "../picture/fam/fam15.jpg";

export const Family = () => {
    const galleryImages = [
        { img: fam1 },
        { img: fam2 },
        { img: fam3 },
        { img: fam4 },
        { img: fam5 },
        { img: fam6 },
        { img: fam7 },
        { img: fam8 },
        { img: fam9 },
        { img: fam10 },
        { img: fam11 },
        { img: fam12 },
        { img: fam13 },
        { img: fam14 },
        { img: fam15 },
    ];

    return (
        <div className="">
            <WSPGalleryC galleryImages={galleryImages} />
        </div>
    );
};

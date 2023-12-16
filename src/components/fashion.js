import React from "react";
import WSPGalleryB from "./WSPGalleryB";
import fas1 from "../picture/fas/fas1.jpg";
import fas2 from "../picture/fas/fas2.jpg";
import fas3 from "../picture/fas/fas3.jpg";
import fas4 from "../picture/fas/fas4.jpg";
import fas5 from "../picture/fas/fas5.jpg";
import fas6 from "../picture/fas/fas6.jpg";
import fas7 from "../picture/fas/fas7.jpg";
import fas8 from "../picture/fas/fas8.jpg";
import fas9 from "../picture/fas/fas9.jpg";
import fas10 from "../picture/fas/fas10.jpg";
import fas11 from "../picture/fas/fas11.jpg";
import fas12 from "../picture/fas/fas12.jpg";
import fas13 from "../picture/fas/fas13.jpg";
import fas14 from "../picture/fas/fas14.jpg";
import fas15 from "../picture/fas/fas15.jpg";
import fas16 from "../picture/fas/fas16.jpg";
import fas17 from "../picture/fas/fas17.jpg";
import fas18 from "../picture/fas/fas18.jpg";
import fas19 from "../picture/fas/fas19.jpg";
import fas20 from "../picture/fas/fas20.jpg";
// import fas21 from "../picture/fas/fas21.jpg";

export const Fashion = () => {
    const galleryImages = [
        { img: fas1 },
        { img: fas2 },
        { img: fas3 },
        { img: fas4 },
        { img: fas5 },
        { img: fas6 },
        { img: fas7 },
        { img: fas8 },
        { img: fas9 },
        { img: fas10 },
        { img: fas11 },
        { img: fas12 },
        { img: fas13 },
        { img: fas14 },
        { img: fas15 },
        { img: fas16 },
        { img: fas17 },
        { img: fas18 },
        { img: fas19 },
        { img: fas20 },
        // { img: fas21 },
    ];

    return (
        <div className="">
            <WSPGalleryB galleryImages={galleryImages} />
        </div>
    );
};

import React, { useState } from "react";
import HeaderGallery from "../components/headerGallery";
import { Link } from "react-router-dom";

import { Architecture } from "../components/Architecture";
import { Fashion } from "../components/fashion";
import { Foodandbev } from "../components/foodandbev";

const Gallery = () => {
    const [selectedMenu, setSelectedMenu] = useState("architecture");

    return (
        <div className="mx-5">
            <HeaderGallery />
            <GalleryMenu
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
            />
            {selectedMenu === "architecture" && <Architecture />}
            {selectedMenu === "foodandbeverage" && <Foodandbev />}
            {selectedMenu === "fashion" && <Fashion />}
        </div>
    );
};

function GalleryMenu({ selectedMenu, setSelectedMenu }) {
    return (
        <div>
            <div className="flex flex-row my-3 lg:my-5 gap-7">
                <div
                    className={`text-md font-semibold underline-offset-8 hover:underline sm:text-lg md:text-xl lg:text-2xl ${
                        selectedMenu === "architecture"
                            ? "underline underline-offset-8"
                            : ""
                    }`}
                >
                    <Link
                        to="#"
                        onClick={() => setSelectedMenu("architecture")}
                    >
                        architecture
                    </Link>
                </div>
                <div
                    className={`text-center text-md font-semibold underline-offset-8 hover:underline sm:text-lg md:text-xl lg:text-2xl ${
                        selectedMenu === "foodandbeverage"
                            ? "underline underline-offset-8"
                            : ""
                    }`}
                >
                    <Link
                        to="#"
                        onClick={() => setSelectedMenu("foodandbeverage")}
                    >
                        f & b
                    </Link>
                </div>
                <div
                    className={`text-md font-semibold underline-offset-8 hover:underline sm:text-lg md:text-xl lg:text-2xl ${
                        selectedMenu === "fashion"
                            ? "underline underline-offset-8"
                            : ""
                    }`}
                >
                    <Link to="#" onClick={() => setSelectedMenu("fashion")}>
                        fashion
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

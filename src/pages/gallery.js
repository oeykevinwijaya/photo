import React, { useState } from "react";
import HeaderGallery from "../components/headerGallery";
import { Link } from "react-router-dom";

const arcImages = require.context("../picture/arc", false, /\.(png|jpg|jpeg)$/);
const arcPaths = arcImages.keys().map(arcImages);

const fnbImages = require.context("../picture/fnb", false, /\.(png|jpg|jpeg)$/);
const fnbPaths = fnbImages.keys().map(fnbImages);

const fashionImages = require.context(
    "../picture/fas",
    false,
    /\.(png|jpg|jpeg|JPG)$/
);
const fashionPaths = fashionImages.keys().map(fashionImages);

// console.log(fashionPaths);

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState("architecture");

    return (
        <div>
            <HeaderGallery />
            <GalleryMenu
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
            />
            {selectedMenu === "architecture" && <Architecture />}
            {selectedMenu === "foodandbeverage" && <FoodAndBeverage />}
            {selectedMenu === "fashion" && <Fashion />}
        </div>
    );
};

function GalleryMenu({ selectedMenu, setSelectedMenu }) {
    return (
        <div>
            <div className="grid grid-cols-12 mt-5 mb-9">
                <div
                    className={`col-span-1 text-base font-semibold hover:underline underline-offset-8 sm:text-base md:text-lg lg:text-2xl ${
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
                    className={`col-span-1 text-base font-semibold text-center hover:underline underline-offset-8 lg:text-2xl ${
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
                    className={`col-span-2 text-base font-semibold hover:underline underline-offset-8 lg:text-2xl ${
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

function Architecture() {
    // Sort the imagePaths array based on the numeric part of the filenames
    const sortedImagePaths = arcPaths.sort((a, b) => {
        const numericA = parseInt(a.match(/\d+/)[0]);
        const numericB = parseInt(b.match(/\d+/)[0]);

        // Compare the numeric parts to sort the array
        return numericA - numericB;
    });

    return (
        <div className="grid grid-cols-3 gap-4">
            {sortedImagePaths.map((imagePath, index) => (
                <img
                    key={index}
                    src={imagePath}
                    alt={`Arc ${index + 1}`}
                    className="object-cover"
                />
            ))}
        </div>
    );
}

function FoodAndBeverage() {
    const sortedImagePaths = fnbPaths.sort((a, b) => {
        const numericA = parseInt(a.match(/\d+/)[0]);
        const numericB = parseInt(b.match(/\d+/)[0]);

        // Compare the numeric parts to sort the array
        return numericA - numericB;
    });

    return (
        <div className="grid grid-cols-4 gap-4">
            {sortedImagePaths.map((imagePath, index) => (
                <img
                    key={index}
                    src={imagePath}
                    alt={`Arc ${index + 1}`}
                    className="object-cover h-full"
                />
            ))}
        </div>
    );
}

function Fashion() {
    const sortedImagePaths = fashionPaths.sort((a, b) => {
        const numericA = parseInt(a.match(/\d+/)[0]);
        const numericB = parseInt(b.match(/\d+/)[0]);

        // Compare the numeric parts to sort the array
        return numericA - numericB;
    });

    return (
        <div className="grid grid-cols-4 gap-4">
            {sortedImagePaths.map((imagePath, index) => (
                <img
                    key={index}
                    src={imagePath}
                    alt={`Arc ${index + 1}`}
                    className="object-cover h-full"
                />
            ))}
        </div>
    );
}

export default Home;

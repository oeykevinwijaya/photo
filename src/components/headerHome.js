import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function HeaderHome() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="sticky top-0 z-50 px-3 pt-1 pb-2 md:pb-3 bg-white/70">
            <div className="grid items-end grid-cols-12">
                <h1 className="col-span-3 text-4xl font-semibold tracking-widest sm:text-5xl md:text-5xl lg:text-6xl">
                    <Link to={"/"}>selah.</Link>
                </h1>
                <div className="justify-end hidden col-span-2 col-start-7 sm:flex">
                    <div className="text-sm font-semibold underline underline-offset-8 sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/"}>home</Link>
                    </div>
                </div>
                <div className="justify-end hidden col-span-2 sm:flex">
                    <div className="text-sm font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/gallery"}>gallery</Link>
                    </div>
                </div>
                <div className="justify-end hidden col-span-2 sm:flex">
                    <div className="text-sm font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/about"}>about</Link>
                    </div>
                </div>
                {/* Mobile Button */}
                <div
                    onClick={handleNav}
                    className="z-10 block col-start-12 sm:hidden"
                >
                    {nav ? (
                        <AiOutlineClose size={25} style={{ color: `#fff` }} />
                    ) : (
                        <AiOutlineMenu size={25} style={{ color: `#000` }} />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-5 justify-center items-center w-full h-screen bg-black/90 text-center text-white transition-all duration-500 ${
                        nav ? "" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        onClick={handleNav}
                        className="text-3xl font-semibold underline underline-offset-8 "
                    >
                        <Link to={"/"}>home</Link>
                    </div>
                    <div
                        onClick={handleNav}
                        className="text-3xl font-semibold underline-offset-8 hover:underline "
                    >
                        <Link to={"/gallery"}>gallery</Link>
                    </div>
                    <div
                        onClick={handleNav}
                        className="text-3xl font-semibold underline-offset-8 hover:underline "
                    >
                        <Link to={"/about"}>about</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;

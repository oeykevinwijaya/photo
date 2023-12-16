import { Link } from "react-router-dom";

function HeaderGallery() {
    return (
        <div className="sticky top-0 z-50 pt-1 pb-3 bg-white">
            <div className="grid items-end grid-cols-12">
                <h1 className="col-span-3 text-4xl font-semibold tracking-widest sm:text-5xl md:text-5xl lg:text-6xl">
                    selah.
                </h1>
                <div className="flex justify-end col-span-2 col-start-7">
                    <div className="text-sm font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/"}>home</Link>
                    </div>
                </div>
                <div className="flex justify-end col-span-2">
                    <div className="text-sm font-semibold underline underline-offset-8 sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/gallery"}>gallery</Link>
                    </div>
                </div>
                <div className="flex justify-end col-span-2">
                    <div className="text-sm font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/about"}>about</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderGallery;

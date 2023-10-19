import { Link } from "react-router-dom";

function HeaderGallery() {
    return (
        <div className="sticky top-0 z-50 pb-3 mb-2 bg-white">
            <div className="grid items-end grid-cols-12">
                <h1 className="col-span-3 text-4xl font-semibold tracking-widest lg:text-6xl md:text-5xl">
                    selah.
                </h1>
                <div className="flex justify-end col-span-2 col-start-7">
                    <div className="text-lg font-semibold hover:underline underline-offset-8 lg:text-2xl md:text-xl">
                        <Link to={"/"}>Home</Link>
                    </div>
                </div>
                <div className="flex justify-end col-span-2">
                    <div className="text-lg font-semibold underline underline-offset-8 lg:text-2xl md:text-xl">
                        <Link to={"/gallery"}>Gallery</Link>
                    </div>
                </div>
                <div className="flex justify-end col-span-2">
                    <div className="text-lg font-semibold hover:underline underline-offset-8 lg:text-2xl md:text-xl">
                        <Link to={"/about"}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderGallery;

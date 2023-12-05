import { Link } from "react-router-dom";

function HeaderGallery() {
  return (
    <div className="sticky top-0 z-50 mb-2 bg-white pb-3">
      <div className="grid grid-cols-12 items-end">
        <h1 className="col-span-3 text-4xl font-semibold tracking-widest sm:text-5xl md:text-5xl lg:text-6xl">
          selah.
        </h1>
        <div className="col-span-2 col-start-7 flex justify-end">
          <div className="text-md font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
            <Link to={"/"}>Home</Link>
          </div>
        </div>
        <div className="col-span-2 flex justify-end">
          <div className="text-md font-semibold underline underline-offset-8 sm:text-xl md:text-2xl lg:text-3xl">
            <Link to={"/gallery"}>Gallery</Link>
          </div>
        </div>
        <div className="col-span-2 flex justify-end">
          <div className="text-md font-semibold underline-offset-8 hover:underline sm:text-xl md:text-2xl lg:text-3xl">
            <Link to={"/about"}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderGallery;

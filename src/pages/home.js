import HeaderHome from "../components/headerHome";
import Interior2 from "../picture/interior-2.jpg";
import Cards1 from "../picture/cards-1a.jpg";
import Cards2 from "../picture/cards-2.jpg";
import Cards3 from "../picture/cards-3a.jpg";
import { Link } from "react-router-dom";

const home = () => {
      return (
            <div className="relative">
                  <HeaderHome />
                  <Content />
                  <Cards />
            </div>
      );
};

function Content() {
      return (
            <div className="flex justify-center mb-4 lg:mt-5 lg:mb-9">
                  <img src={Interior2} alt="interior-2" className="w-full" />
            </div>
      );
}

function Cards() {
      return (
            <div className="flex flex-col">
                  <div className="mb-1 text-2xl font-semibold md:mb-3 lg:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                        Library
                  </div>
                  <div className="grid grid-cols-12 gap-2 lg:gap-3">
                        <div className="flex flex-col col-span-4 hover:underline underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link to={"/gallery"}>
                                          <img
                                                src={Cards1}
                                                alt="architecture"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div className="mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                                    <Link to={"/gallery"}>architecture</Link>
                              </div>
                        </div>
                        <div className="flex flex-col col-span-4 hover:underline underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link to={"/gallery"}>
                                          <img
                                                src={Cards2}
                                                alt="f & b"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div className="mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                                    <Link to={"/gallery"}>f & b</Link>
                              </div>
                        </div>
                        <div className="flex flex-col col-span-4 hover:underline underline-offset-8">
                              <div className="aspect-[3/2]">
                                    <Link to={"/gallery"}>
                                          <img
                                                src={Cards3}
                                                alt="architecture"
                                                className="object-cover w-full h-full"
                                          />
                                    </Link>
                              </div>
                              <div className="mt-1 text-lg font-semibold text-center lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                                    <Link to={"/gallery"}>fashion</Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default home;

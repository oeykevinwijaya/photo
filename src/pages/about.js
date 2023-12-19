import HeaderAbout from "../components/headerAbout";
import Aboutpic from "../picture/about.jpg";

const About = () => {
    return (
        <div>
            <HeaderAbout />
            <Content />
        </div>
    );
};

function Content() {
    return (
        <div className="mt-5 mb-9">
            <div className="flex flex-col gap-3 mx-3 md:grid md:grid-cols-6">
                <div className="justify-end md:col-span-2 md:col-start-2">
                    <img
                        src={Aboutpic}
                        alt="kevinpic"
                        className="object-cover w-full h-[50vh] md:h-4/5 rounded-md aspect-content aspect-w-1 aspect-h-1"
                    />
                </div>
                <div className="mt-3 md:mt-0 md:ml-3 md:col-span-2">
                    <div className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                        about me
                    </div>
                    <div className="text-xs sm:text-lg md:text-lg lg:text-lg xl:text-xl">
                        I'm Kevin, a seasoned photographer and videographer with
                        over 6 years of experience based on Melbourne,
                        Australia. My experience are various from architecture,
                        food, fashion, weddings, events, products, and drone
                        pilot.
                    </div>
                    &nbsp;&nbsp;
                    <div className="text-xs sm:text-lg md:text-lg lg:text-lg xl:text-xl">
                        I dedicate extra effort to capturing intricate details,
                        ensuring that the results are of high quality and
                        delivered promptly.
                    </div>
                </div>
                {/* <div className="col-span-6 ml-3">
                              <div className="mb-1 text-lg font-semibold lg:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
                                    Submit an Enquiry
                              </div>
                              <div className="mb-2 lg:mb-5">
                                    <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl">
                                          Name
                                    </p>
                                    <input
                                          type="text"
                                          placeholder=""
                                          className="w-full px-3 py-2 border rounded-md"
                                    />
                              </div>
                              <div className="mb-2 lg:mb-5">
                                    <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl">
                                          Email
                                    </p>
                                    <input
                                          type="email"
                                          placeholder=""
                                          className="w-full px-3 py-2 border rounded-md"
                                    />
                              </div>
                              <div className="mb-2 lg:mb-5">
                                    <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl">
                                          Message
                                    </p>
                                    <textarea
                                          placeholder=""
                                          className="w-full px-3 py-2 border rounded-md"
                                    />
                              </div>
                              <div>
                                    <button className="px-2 py-1 font-semibold text-white bg-blue-500 rounded-md lg:text-xl text-md lg:px-3 lg:py-2 hover:bg-blue-600">
                                          Submit (not yet implemented)
                                    </button>
                              </div>
                        </div> */}
            </div>
        </div>
    );
}

export default About;

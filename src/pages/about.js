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
                  <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-6 md:col-start-3 md:col-span-4 sm:col-start-2 sm:col-span-5 lg:col-span-3 lg:col-start-4">
                              <img
                                    src={Aboutpic}
                                    alt="interior-2"
                                    className="object-cover w-full rounded-md h-96 lg:h-full sm:w-full"
                              />
                        </div>
                        <div className="col-span-6 ml-3">
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
                        </div>
                  </div>
            </div>
      );
}

export default About;

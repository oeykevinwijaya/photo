import HeaderAbout from "../components/headerAbout";
import About from "../picture/about.jpg";

const home = () => {
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
            <div className="grid grid-cols-12">
                <div className="col-span-3 col-start-4 pr-3">
                    <img src={About} alt="interior-2" className="w-full" />
                </div>
                <div className="col-span-4 ml-3">
                    <div className="mb-4 text-3xl font-semibold">
                        Submit an Enquiry
                    </div>
                    <div className="mb-5 text-xl font-semibold">
                        <p>Name</p>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-5 text-xl font-semibold">
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder=""
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-5 text-xl font-semibold">
                        <p>Message</p>
                        <textarea
                            placeholder=""
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;

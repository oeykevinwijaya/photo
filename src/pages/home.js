// import HeaderHome from "../components/headerHome";
import Cards1 from "../picture/cards-1a.jpg";
import Cards2 from "../picture/cards-2.jpg";
import Cards3 from "../picture/cards-3a.jpg";
import { Link } from "react-router-dom";
import bg from "../picture/interior-2.jpg";
import HeaderHome from "../components/headerHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const home = () => {
    return (
        <div className="relative">
            {/* <HeaderHome /> */}
            <Content />
            <Cards />
        </div>
    );
};

function Content() {
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    const handleScrollToBottom = () => {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth", // Optional: Adds smooth scrolling effect
        });
    };

    return (
        <main className="h-screen" style={styles}>
            <HeaderHome />

            <div className="h-full flex flex-col justify-center px-[1rem] lg:px-[4rem]">
                <h1 className="text-[#FFF] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    hi people!
                </h1>
                {/* <h3 className="text-white text-[2rem] font-bold ">
                    design studio
                </h3> */}
                <button className="w-1/3 md:w-2/5 lg:w-1/4 lg: py-2 lg:py-[6px] rounded-3xl text-sm lg:text-2xl font-semibold bg-[#98EC65] hover:bg-[#81E047] mt-[1rem] ">
                    <Link to={"/gallery"}>explore gallery</Link>
                </button>
                <FontAwesomeIcon
                    onClick={handleScrollToBottom}
                    bounce
                    icon={faChevronCircleDown}
                    className="inset-x-0 bottom-0 h-10 pt-96 lg:h-14 btnClose"
                    style={{ color: "#98ec65" }}
                />
            </div>
        </main>
    );
}

function Cards() {
    return (
        <div className="flex flex-col mx-5 mt-4">
            <div className="mb-1 text-2xl font-semibold md:mb-3 lg:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                library
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
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
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
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
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
                    <div className="mt-1 text-lg font-medium text-center md:font-semibold lg:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
                        <Link to={"/gallery"}>fashion</Link>
                    </div>
                </div>
            </div>
            <FontAwesomeIcon
                icon="fa-solid fa-circle-chevron-down"
                bounce
                style={{ color: "#9e9e9e" }}
            />
        </div>
    );
}

export default home;

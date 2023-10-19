import HeaderHome from "../components/headerHome";
import Interior2 from "../picture/interior-2.jpg";
import Cards1 from "../picture/cards-1a.jpg";
import Cards2 from "../picture/cards-2.jpg";
import Cards3 from "../picture/cards-3a.jpg";

const home = () => {
    return (
        <div>
            <HeaderHome />
            <Content />
            <Cards />
        </div>
    );
};

function Content() {
    return (
        <div className="flex justify-center mt-5 mb-9">
            <img src={Interior2} alt="interior-2" className="" />
        </div>
    );
}

function Cards() {
    return (
        <div className="flex flex-col">
            <div className="mb-4 text-2xl font-semibold lg:text-3xl">
                Library
            </div>
            <div className="grid grid-cols-12">
                <div className="flex flex-col col-span-4 pr-6">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards1}
                            alt="architecture"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-3 text-lg font-semibold text-center">
                        architecture
                    </div>
                </div>
                <div className="flex flex-col col-span-4 px-3">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards2}
                            alt="f & b"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-3 text-lg font-semibold text-center">
                        f & b
                    </div>
                </div>
                <div className="flex flex-col col-span-4 pl-6">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards3}
                            alt="architecture"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-3 text-lg font-semibold text-center">
                        fashion
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;

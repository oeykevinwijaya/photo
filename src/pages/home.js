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
        <div className="mt-5 mb-9">
            <img src={Interior2} alt="interior-2" className="w-full" />
        </div>
    );
}

function Cards() {
    return (
        <div className="flex flex-col">
            <div className="font-semibold text-3xl mb-4">Library</div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 flex flex-col pr-6">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards1}
                            alt="architecture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center font-semibold text-lg mt-3">
                        architecture
                    </div>
                </div>
                <div className="col-span-4 flex flex-col px-3">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards2}
                            alt="f & b"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center font-semibold text-lg mt-3">
                        f & b
                    </div>
                </div>
                <div className="col-span-4 flex flex-col pl-6">
                    <div className="aspect-[3/2]">
                        <img
                            src={Cards3}
                            alt="architecture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center font-semibold text-lg mt-3">
                        fashion
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;

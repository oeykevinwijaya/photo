import HeaderHome from "../components/headerHome";

const home = () => {
    return (
        <div>
            <HeaderHome />
            <Content />
        </div>
    );
};

function Content() {
    return (
        <div>
            <div>this is home page</div>
        </div>
    );
}

export default home;

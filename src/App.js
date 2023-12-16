import "./App.css";
import AppRoutes from "./components/AppRoute";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <div className="">
                {/* <div className="mx-6 mt-4"> */}
                <div className="">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;

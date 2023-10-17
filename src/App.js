import "./App.css";
import AppRoutes from "./components/AppRoute";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <div className="flex flex-col mx-4 mt-4">
                <div className="flex-grow">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Home from './pages/home/Home';
import Loader from "./components/loader/Loader";
import { DarkModeContext } from './context/Context';

function App() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    if (loading) {
        return <Loader />;
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Home />
        </DarkModeContext.Provider>
    );
}

export default App;
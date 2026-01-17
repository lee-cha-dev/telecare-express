import { useState } from 'react';
import './App.css'
import './styles/main.css';
import {TeleCareExpress} from "./components/pages/TeleCareExpress.jsx";
import {useAuth} from "./components/hooks/useAuth.js";
import Login from "./components/Login.jsx";
import FAQ from "./components/pages/FAQ.jsx";

function App() {
    const { isAuthenticated, login } = useAuth();
    const [currentPage, setCurrentPage] = useState('home');

    const isDev = import.meta.env.MODE === 'development';

    // Show login page if not authenticated
    if (!isAuthenticated && !isDev) {
        return <Login onLogin={login} />;
    }

    return (
        <>
            {currentPage === 'home' && <TeleCareExpress onNavigate={setCurrentPage} />}
            {currentPage === 'faq' && <FAQ onNavigate={setCurrentPage} />}
        </>
    )
}

export default App
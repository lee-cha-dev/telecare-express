import './App.css'
import './styles/main.css';
import {TeleCareExpress} from "./components/pages/TeleCareExpress.jsx";
import {useAuth} from "./components/hooks/useAuth.js";
import Login from "./components/Login.jsx";

function App() {
    const { isAuthenticated, login } = useAuth();

    const isDev = import.meta.env.MODE === 'development';

    // Show login page if not authenticated
    if (!isAuthenticated && !isDev) {
        return <Login onLogin={login} />;
    }
    return (
        <>
            <TeleCareExpress/>
        </>
    )
}

export default App

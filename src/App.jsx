import './App.css'
import './styles/main.css';
import {TeleCareExpress} from "./components/pages/TeleCareExpress.jsx";
import {useAuth} from "./components/hooks/useAuth.js";
import Login from "./components/Login.jsx";

function App() {
    const { isAuthenticated, isLoading, login, logout } = useAuth();

    // Show login page if not authenticated
    if (!isAuthenticated) {
        return <Login onLogin={login} />;
    }
    return (
        <>
            <TeleCareExpress/>
        </>
    )
}

export default App

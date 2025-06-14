import { useState, useEffect } from "react";
import { data, useNavigate } from "react-router-dom";
import { CheckAuth } from "../../Services/AuthCheck";

const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        loading: true,
        isAuthenticated: false,
        user: null
    });

    useEffect(() => {
        const verifyAuth = async () => {
            const data = await CheckAuth();
            setAuth({
                loading: false,
                isAuthenticated: data.isAuthenticated,
                user: data.user
            });

            if (!data.isAuthenticated) {
                navigate('/login');
                return;
            }

        };
        verifyAuth();
    }, []);

    // Jangan render apapun saat masih loading
    if (auth.loading) {
        return <div>Loading...</div>;
    }

    // Kalau belum authenticate, komponen tidak akan sampai sini (sudah navigate)
    return children;
};

export default AuthWrapper;

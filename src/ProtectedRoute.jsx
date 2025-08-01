import { Navigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "./firebase";

export default function ProtectedRoute({children}){
    const [user, loading] = useAuthState(auth);

    if(loading) {
        return <p>Yuklanmoqda...</p>;
    }

    return(
        user ? children : <Navigate to={'/signin'} />
    )
}
import { logoutUser } from '../appwrite/authappwrite.js'
import { useUser } from "../context/UserContext.jsx";


const Logout = () => {

    const { user, setUser } = useUser();
    const handleLogout = async () => {
        await logoutUser();
        setUser(null);
    }

    return (
        <>
            <p>Welcome, {user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout
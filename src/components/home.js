import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section className="section" style={{color:"white"}}>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />

            <Link to="/skills">Go to the Skills</Link>
            <br />
            <Link to="/test">Go to the test page</Link>
            <br />
            
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home

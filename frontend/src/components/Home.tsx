
import { useLocation , useNavigate} from "react-router-dom";
import "./Home.css"; 
const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state?.name || "Utilisateur inconnu";
    const handleLogout = () => {
        navigate("/login"); 
    };

    return (
        <div className="home-container">
            <h1 className="home-title">Hello User {name}</h1>
            <button className="home-button" onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
}

export default Home

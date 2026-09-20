import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const handleLogout = () => {
    logout();
    navigate("/login");
};

    return (
        <div className="dashboard-page">
            <nav className="dashboard-navbar">
                <div className="dashboard-logo">
                    Smart Alumni Connect
                </div>

                <div className="dashboard-user">
    <span>Welcome, {user?.username}</span>

    <button
        className="logout-button"
        onClick={handleLogout}
    >
        Logout
    </button>
</div>
            </nav>

            <main className="dashboard-container">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>
                        Welcome to your Smart Alumni Connect dashboard.
                    </p>
                </div>

                <div className="dashboard-grid">

                    <div className="dashboard-card">
                        <h2>Profile</h2>
                        <p>
                            View and manage your alumni profile.
                        </p>
                        <button>View Profile</button>
                    </div>

                    <div className="dashboard-card">
                        <h2>Alumni Directory</h2>
                        <p>
                            Find and connect with alumni.
                        </p>
                        <button disabled>Coming Soon</button>
                    </div>

                    <div className="dashboard-card">
                        <h2>Events</h2>
                        <p>
                            Discover upcoming alumni events.
                        </p>
                        <button disabled>Coming Soon</button>
                    </div>

                    <div className="dashboard-card">
                        <h2>Jobs & Internships</h2>
                        <p>
                            Explore opportunities shared by alumni.
                        </p>
                        <button disabled>Coming Soon</button>
                    </div>

                    <div className="dashboard-card">
                        <h2>Messages</h2>
                        <p>
                            Connect and communicate with alumni.
                        </p>
                        <button disabled>Coming Soon</button>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Dashboard;
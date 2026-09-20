import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function Landing() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Smart Alumni Connect</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>

          <div className="nav-buttons">
            <Link to="/login">Login</Link>
            
            

            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">CONNECT • NETWORK • GROW</p>

          <h1>
            Connect with your
            <span> Alumni Community</span>
          </h1>

          <p className="hero-description">
            Smart Alumni Connect is a centralized platform that brings
            students, alumni and career opportunities together through
            networking, mentorship, events and professional connections.
          </p>

          <div className="hero-buttons">
            <Link to="/register">Get Started</Link>

            <a href="#features" className="btn btn-outline">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-tag">ABOUT THE PLATFORM</p>

          <h2>One Platform for Your Alumni Network</h2>

          <p>
            Build meaningful professional connections, discover opportunities
            and stay connected with your institution's alumni community.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-heading">
          <p className="section-tag">WHAT WE OFFER</p>

          <h2>Platform Features</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Alumni Network</h3>
            <p>
              Discover and connect with alumni based on their professional
              background, skills and experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Jobs & Internships</h3>
            <p>
              Discover career opportunities shared through the alumni
              community.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Mentorship</h3>
            <p>
              Connect with experienced alumni and build valuable
              mentor-mentee relationships.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Events</h3>
            <p>
              Stay updated with alumni events, activities and networking
              opportunities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Networking</h3>
            <p>
              Communicate with alumni and develop meaningful professional
              connections.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Assistance</h3>
            <p>
              Future AI features will help users interact with and discover
              useful alumni information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <h2>Ready to connect with your alumni community?</h2>

          <p>
            Create your account and start building meaningful connections.
          </p>
        </div>

        <a href="/register" className="btn btn-light">
          Join Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>Smart Alumni Connect</h3>

          <p>
            Connecting alumni, students and opportunities in one platform.
          </p>
        </div>

        <p>© 2026 Smart Alumni Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}

function LoginPlaceholder() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

        <p className="auth-subtitle">
          Login page will be implemented in Phase 2E.
        </p>

        <a href="/" className="btn btn-primary auth-button">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Landing />} />

    <Route
    path="/register"
    element={
        <PublicRoute>
            <Register />
        </PublicRoute>
    }
/>

<Route
    path="/login"
    element={
        <PublicRoute>
            <Login />
        </PublicRoute>
    }
/>

    <Route
        path="/dashboard"
        element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
    />
</Routes>
    </BrowserRouter>
  );
}

export default App;
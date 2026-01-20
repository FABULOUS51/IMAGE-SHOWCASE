export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar pill-glass">
        <div className="logo">
          <a href="#">Freddy</a>
        </div>
        <ul className="nav-links">
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#gallery">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <style>{`
        .navbar-container {
            position: fixed;
            top: 2rem;
            left: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            justify-content: center;
            pointer-events: none; /* let clicks pass through outside container */
        }

        .navbar {
            pointer-events: auto;
            display: flex;
            align-items: center;
            gap: 3rem;
            padding: 0.75rem 2rem;
            border-radius: 100px;
            background: rgba(30, 30, 30, 0.6); /* Semi-transparent surface */
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }
        
        .navbar:hover {
            transform: translateY(2px);
        }

        .logo a {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 1.25rem;
            letter-spacing: -0.5px;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            font-size: 0.95rem;
            font-weight: 500;
            opacity: 0.7;
            position: relative;
        }
        
        .nav-links a:hover, .nav-links a.active {
            opacity: 1;
            color: var(--md-sys-color-primary);
        }

        /* Simple indicator dot for active state if needed, keeping it minimal for now */
        
        @media (max-width: 600px) {
            .navbar {
                width: 90%;
                justify-content: space-between;
                gap: 1rem;
            }
        }
      `}</style>
    </nav>
  )
}

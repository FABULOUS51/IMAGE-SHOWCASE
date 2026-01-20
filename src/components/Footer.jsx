export default function Footer() {
    return (
        <footer id="contact" className="footer glass">
            <div className="container">
                <div className="footer-content">
                    <h2>READY TO CREATE?</h2>
                    <a href="mailto:freddy@example.com" className="email-link">freddy@example.com</a>
                    <div className="socials">
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Behance</a>
                    </div>
                    <p className="copyright">&copy; 2026 Freddy Edits. All Rights Reserved.</p>
                </div>
            </div>
            <style>{`
        .footer {
            padding: 6rem 0 2rem;
            text-align: center;
            border-top: 1px solid var(--glass-border);
            margin-top: 4rem;
        }
        .footer h2 {
            font-size: 3rem;
            margin-bottom: 2rem;
            color: var(--text-primary);
        }
        .email-link {
            font-size: 1.5rem;
            color: var(--accent-color);
            border-bottom: 2px solid transparent;
        }
        .email-link:hover {
            border-bottom-color: var(--accent-color);
        }
        .socials {
            margin: 3rem 0;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        .socials a {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .copyright {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
      `}</style>
        </footer>
    )
}

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="bento-grid">
                    {/* Cell 1: Intro / Details */}
                    <div className="cell cell-intro glass-panel">
                        <div className="meta-row">
                            <span>EST — 2026</span>
                            <span>BASED IN CYBERSPACE</span>
                        </div>
                        <div className="mission-statement">
                            <p>
                                Visuals that defy logic. <br />
                                Crafting digital experiences for the future.
                            </p>
                            <div className="scribble-icon">
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M10,50 Q30,10 50,50 T90,50" />
                                    <path d="M10,30 L90,70" opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Cell 2: Tagline / Menu */}
                    <div className="cell cell-heading glass-panel">
                        <div className="top-actions">
                            <button className="icon-btn">Cart (0)</button>
                            <button className="icon-btn">Menu =</button>
                        </div>
                        <h2 className="tagline">
                            THE FUSION <br />
                            OF IMAGINATION
                        </h2>
                    </div>

                    {/* Cell 3: Brand Name */}
                    <div className="cell cell-brand">
                        <h1 className="brand-name">
                            FREDDY<span className="reg-mark">©</span>
                        </h1>
                        <a href="#gallery" className="shop-link">( VIEW WORK ) <span>&rarr;</span></a>
                    </div>

                    {/* Cell 4: Abstract Graphic */}
                    <div className="cell cell-graphic glass-panel">
                        <div className="shapes-container">
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                            <div className="shape shape-3"></div>
                        </div>
                        <span className="graphic-id">(259)</span>
                    </div>

                    {/* Cell 5: Hero Image */}
                    <div className="cell cell-image">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero Featured Work" />
                        <div className="image-overlay">
                            <h3>LATEST DROP</h3>
                            <p>CERAMIC PLATES & POSTERS</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6rem 0 2rem; /* Account for fixed navbar */
        }

        .bento-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            grid-template-rows: auto auto 300px;
            gap: 1rem;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .cell {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .glass-panel {
            background: var(--md-sys-color-surface-container);
            border-radius: var(--shape-corner-large);
        }

        /* --- Cell 1: Intro --- */
        .cell-intro {
            justify-content: space-between;
            min-height: 200px;
        }
        .meta-row {
            display: flex;
            gap: 2rem;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--md-sys-color-secondary);
        }
        .mission-statement {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 0.95rem;
            color: var(--md-sys-color-on-surface);
            line-height: 1.5;
        }
        .scribble-icon {
            color: var(--md-sys-color-primary);
        }

        /* --- Cell 2: Heading --- */
        .cell-heading {
            justify-content: space-between;
            align-items: flex-end;
            text-align: right;
        }
        .top-actions {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        .icon-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            color: var(--md-sys-color-on-surface);
            font-family: var(--font-body);
            font-size: 0.75rem;
            cursor: pointer;
            transition: 0.2s;
        }
        .icon-btn:hover {
            background: var(--md-sys-color-primary);
            color: var(--md-sys-color-on-primary);
        }
        .tagline {
            font-size: 2rem;
            line-height: 1.1;
            font-weight: 400;
        }

        /* --- Cell 3: Brand --- */
        .cell-brand {
            background: var(--md-sys-color-primary-container); /* Accent block */
            color: var(--md-sys-color-on-primary-container);
            border-radius: var(--shape-corner-large);
            justify-content: center;
            align-items: flex-start;
            padding: 3rem;
        }
        .brand-name {
            font-size: clamp(4rem, 12vw, 9rem);
            font-weight: 500;
            line-height: 0.8;
            letter-spacing: -4px;
            margin-bottom: 2rem;
            position: relative;
        }
        .reg-mark {
            font-size: 2rem;
            vertical-align: super;
            margin-left: 0.5rem;
            font-weight: 300;
        }
        .shop-link {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid currentColor;
            padding-bottom: 2px;
            opacity: 0.8;
        }
        .shop-link:hover {
            opacity: 1;
        }

        /* --- Cell 4: Abstract --- */
        .cell-graphic {
            background: var(--md-sys-color-tertiary); /* Soft Pink/Green block */
            color: #000;
            border-radius: var(--shape-corner-large);
            align-items: center;
            justify-content: center;
        }
        .shapes-container {
            display: flex;
            gap: 1rem;
        }
        .shape {
            width: 40px;
            height: 40px;
            background: rgba(0,0,0,0.1);
        }
        .shape-1 { border-radius: 50%; }
        .shape-2 { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
        .shape-3 { border-radius: 8px; transform: rotate(45deg); }
        
        .graphic-id {
            position: absolute;
            top: 1rem;
            right: 1rem;
            opacity: 0.5;
            font-size: 0.8rem;
        }

        /* --- Cell 5: Image --- */
        .cell-image {
            grid-column: 1 / -1; /* Full width */
            padding: 0;
            border-radius: var(--shape-corner-large);
            overflow: hidden;
            position: relative;
        }
        .cell-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .cell-image:hover img {
            transform: scale(1.05);
        }
        .image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 2rem;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .image-overlay h3 {
            font-size: 3rem;
            line-height: 1;
            margin: 0;
        }
        .image-overlay p {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        /* Mobile */
        @media (max-width: 900px) {
            .bento-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
            }
            .cell-image {
                min-height: 300px;
            }
        }
      `}</style>
        </section>
    )
}

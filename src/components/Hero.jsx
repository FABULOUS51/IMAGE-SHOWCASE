export default function Hero() {
    return (
        <section className="hero-section">
            {/* Background Spotlight */}
            <div className="spotlight"></div>

            <div className="container hero-content">
                <div className="main-title-wrapper">
                    <h1 className="hero-title">
                        <span className="line">VISUAL</span>
                        <span className="line text-primary">ETHICS</span>
                    </h1>
                </div>

                <div className="subtitle-row">
                    <p className="serif-subtitle">In the Dawn of Digital Revolution</p>
                </div>

                <div className="hero-footer">
                    <div className="barcode-group">
                        <div className="barcode"></div>
                        <span>90028</span>
                    </div>

                    <div className="tech-badges">
                        <span className="badge">VISUAL ETHICS INC.<br /> 1300 CYBER STREET</span>
                        <span className="badge pill">GUARANTEED<br />GENUINE</span>
                    </div>

                    <div className="news-sticker">
                        <div className="sticker-content">
                            <h4>LATEST DROP: NEON DREAMS AND UDIO</h4>
                            <p>7.1.2026 News</p>
                        </div>
                    </div>
                </div>

                <a href="#contact" className="cta-skew">
                    <span>GET IN TOUCH</span>
                </a>

            </div>

            <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #050505;
          overflow: hidden;
        }
        
        /* Cinematic Spotlight Background */
        .spotlight {
            position: absolute;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
            width: 80vw;
            height: 80vh;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%);
            filter: blur(60px);
            z-index: 0;
            pointer-events: none;
            opacity: 0.8;
            animation: pulse-light 8s infinite alternate;
        }
        
        @keyframes pulse-light {
            from { opacity: 0.6; transform: translateX(-50%) scale(1); }
            to { opacity: 0.9; transform: translateX(-50%) scale(1.1); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* Massive Typography */
        .hero-title {
            display: flex;
            flex-direction: column;
            font-size: clamp(6rem, 22vw, 24rem);
            line-height: 0.8;
            font-weight: 700;
            letter-spacing: -2px;
            color: #fff;
            text-transform: uppercase;
            font-family: 'Oswald', sans-serif;
            transform: scaleY(1.1); /* Stretch height slightly for Condensed look */
        }
        
        .hero-title .text-primary {
            color: var(--md-sys-color-primary);
        }

        .serif-subtitle {
            font-family: var(--font-serif);
            font-size: clamp(1rem, 2vw, 2rem);
            color: var(--md-sys-color-primary);
            font-style: italic;
            margin-top: 1rem;
            letter-spacing: 1px;
        }

        /* Industrial Footer */
        .hero-footer {
            position: absolute;
            bottom: 2rem;
            left: 0;
            width: 100%;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-family: 'Oswald', sans-serif;
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
        }

        .barcode {
            width: 40px;
            height: 30px;
            background: repeating-linear-gradient(
                to right,
                #fff 0,
                #fff 2px,
                transparent 2px,
                transparent 4px
            );
            margin-right: 0.5rem;
        }
        .barcode-group {
            display: flex;
            align-items: center;
            transform: rotate(-90deg);
            transform-origin: bottom left;
            position: absolute;
            bottom: 4rem;
            left: 2rem;
        }
        
        .tech-badges {
            display: flex;
            gap: 2rem;
            margin-left: 4rem; /* offset for barcode */
        }
        .badge {
            border-left: 2px solid var(--md-sys-color-primary);
            padding-left: 0.5rem;
            line-height: 1.2;
            font-size: 0.7rem;
            text-transform: uppercase;
        }
        .badge.pill {
             border: 1px solid var(--md-sys-color-primary);
             border-radius: 50%;
             padding: 0.5rem;
             width: 60px;
             height: 30px; /* oval */
             display: flex;
             align-items: center;
             justify-content: center;
             text-align: center;
             font-size: 0.5rem;
        }

        /* News Sticker */
        .news-sticker {
            background: var(--md-sys-color-primary);
            color: black;
            padding: 1rem 2rem;
            clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
            max-width: 300px;
        }
        .news-sticker h4 {
            line-height: 1;
            margin-bottom: 0.25rem;
            font-weight: 700;
        }

        /* CTA Button - Skewed */
        .cta-skew {
            position: absolute;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%) skewX(-10deg);
            background: var(--md-sys-color-primary);
            color: black;
            padding: 0.5rem 2rem;
            font-weight: 700;
            font-family: 'Oswald', sans-serif;
            letter-spacing: 1px;
            transition: transform 0.2s;
        }
        
        .cta-skew span {
            display: block;
            transform: skewX(10deg); /* un-skew text */
        }
        
        .cta-skew:hover {
            transform: translateX(-50%) skewX(-10deg) scale(1.1);
            background: #fff;
        }

        @media (max-width: 768px) {
            .hero-footer {
                flex-direction: column;
                align-items: flex-start;
                gap: 2rem;
            }
            .tech-badges { margin: 0; }
            .barcode-group { position: static; transform: none; margin-bottom: 1rem;}
            .news-sticker { width: 100%; clip-path: none; margin-top: 1rem;}
            .cta-skew { bottom: 35%; }
        }

      `}</style>
        </section>
    )
}

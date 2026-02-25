import { Suspense } from 'react';
import FluidGlass from './FluidGlass';

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                height: '100vh',
                position: 'relative',
                background: '#050505',
                overflow: 'hidden',
            }}
        >
            <Suspense fallback={
                <div style={{ height: '100vh', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccff00', fontFamily: 'Oswald, sans-serif', fontSize: '4rem', letterSpacing: '-2px' }}>
                    BIASED PIXELS
                </div>
            }>
                <FluidGlass />
            </Suspense>
        </section>
    );
}

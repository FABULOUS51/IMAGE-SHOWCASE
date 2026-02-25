import FluidGlass from './FluidGlass';

export default function Hero() {
    return (
        <section id="hero" style={{ height: '100vh', position: 'relative', background: '#050505' }}>
            <FluidGlass
                mode="lens"
                lensProps={{
                    scale: 0.25,
                    ior: 1.15,
                    thickness: 5,
                    chromaticAberration: 0.1,
                    anisotropy: 0.01
                }}
            />
        </section>
    );
}

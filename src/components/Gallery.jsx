import CircularGallery from './CircularGallery';

// Your gallery items — replace src with '/images/your-photo.jpg' to use your own images
const items = [
    { image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', text: 'Neon Dreams' },
    { image: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&w=800&q=80', text: 'Urban Glitch' },
    { image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=800&q=80', text: 'Cyber Samurai' },
    { image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80', text: 'Abstract Flow' },
    { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', text: 'Retrowave' },
    { image: 'https://images.unsplash.com/photo-1614850523296-63fac9b075b9?auto=format&fit=crop&w=800&q=80', text: 'Dark Matter' },
];

export default function Gallery() {
    return (
        <section id="gallery">
            <div className="gallery-header">
                <h2>SELECTED WORK</h2>
                <p>Scroll or drag to explore</p>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery
                    items={items}
                    bend={1}
                    textColor="#ccff00"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>

            <style>{`
        #gallery {
          padding: 6rem 0 0;
        }
        .gallery-header {
          text-align: center;
          padding: 0 1.5rem 3rem;
        }
        .gallery-header h2 {
          font-size: clamp(2rem, 5vw, 4rem);
          font-family: 'Oswald', sans-serif;
          color: #ffffff;
          letter-spacing: -1px;
        }
        .gallery-header p {
          color: #888;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      `}</style>
        </section>
    );
}

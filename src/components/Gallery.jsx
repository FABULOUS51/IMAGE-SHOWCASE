import { useState } from 'react'
import Modal from './Modal'

// Mock Data
// HOW TO ADD YOUR OWN IMAGES:
// 1. Place your image files in the "public/images" folder.
// 2. Change the 'src' below to "/images/your-file-name.jpg"
// Example: src: '/images/my-poster.jpg'

const galleryItems = [
    { id: 1, title: 'God of War', category: 'Poster Design', src: '/images/KRATOS.jpg' },
    { id: 2, title: 'E30', category: 'Poster Design', src: '/images/E30.jpg' },
    { id: 3, title: 'Skyline', category: 'Poster Design', src: '/images/skyline.jpg' },
    { id: 4, title: 'Abstract Flow', category: 'Texture', src: '' },
    { id: 5, title: 'Retrowave', category: 'Poster Design', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Dark Matter', category: 'Compositing', src: 'https://images.unsplash.com/photo-1614850523296-63fac9b075b9?auto=format&fit=crop&w=800&q=80' },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section id="gallery" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="fade-in-up">Selected Work</h2>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="gallery-card"
                            onClick={() => setSelectedImage(item)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="image-wrapper">
                                <img src={item.src} alt={item.title} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <h4>{item.title}</h4>
                                <span className="chip">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />

            <style>{`
        .section-header {
            margin-bottom: 4rem;
            text-align: center;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
        }

        .gallery-card {
            background: var(--md-sys-color-surface-container);
            border-radius: var(--shape-corner-large);
            overflow: hidden;
            cursor: pointer;
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
            transition: transform 0.2s, background-color 0.2s;
        }
        
        .gallery-card:hover {
            transform: translateY(-5px);
            background: var(--md-sys-color-surface-container-high);
        }

        .image-wrapper {
            position: relative;
            padding-bottom: 75%; /* 4:3 cards */
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .image-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .gallery-card:hover img {
            transform: scale(1.05);
        }

        .card-content {
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card-content h4 {
            font-size: 1.25rem;
            margin: 0;
        }
        
        .chip {
            font-size: 0.75rem;
            background: rgba(255,255,255,0.1);
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            color: var(--md-sys-color-secondary);
            font-weight: 500;
        }

      `}</style>
        </section>
    )
}

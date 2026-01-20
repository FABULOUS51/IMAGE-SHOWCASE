import { useEffect } from 'react'

export default function Modal({ image, onClose }) {
    if (!image) return null

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <div className="modal-overlay glass" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <img src={image.src} alt={image.title} className="modal-image" />
                <div className="modal-info">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                </div>
            </div>
            <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.85);
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          flex-direction: column;
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-image {
          max-height: 80vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .modal-info {
          margin-top: 1rem;
          color: white;
          text-align: center;
        }
        .modal-info h3 {
          font-family: var(--font-display);
          font-weight: 400;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .modal-info p {
           color: var(--accent-color);
           font-size: 0.9rem;
           text-transform: uppercase;
           letter-spacing: 2px;
        }
        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          transition: 0.2s;
        }
        .close-btn:hover {
          color: var(--accent-color);
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    )
}

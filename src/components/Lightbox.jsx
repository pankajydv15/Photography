function Lightbox({ photo, onClose }) {
    if (!photo) return null;
  
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1000
      }} onClick={onClose}>
        <img src={photo.url} alt={photo.title} style={{ maxWidth: '90%', maxHeight: '80vh' }} />
      </div>
    );
  }
  
  export default Lightbox;
  
import React from 'react'

export const SongCards = () => {
  return (
  <div
      className="card shadow-sm rounded overflow-hidden h-60"
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        backgroundColor: 'rgba(20, 20, 20, 1)',
      }}
    >
      <img
        src='https://images.vexels.com/media/users/3/354591/isolated/preview/8ee16f2db388937d2ddb2b394ac03a87-diseno-de-portada-de-album-de-discos-de-musica.png'
        className="card-img-top"
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        }}
      />
      <div className="card-body text-center p-2" style={{ color: 'white' }}>
        <h6 className="card-title mb-1">Cancion</h6>
        <p className="card-text  mb-0">Autor</p>
      </div>
      <button style={{ background: 'transparent', border: 'none', fontSize:'2rem' }} >▶️</button>

      <style>
        {`
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(88, 88, 88, 0.97);
          }
        `}
      </style>
    </div>
  )
}

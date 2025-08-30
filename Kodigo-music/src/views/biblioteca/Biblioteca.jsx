import React from 'react'
import { SongCards } from '../../components/SongCards'

export const Biblioteca = () => {
     const canciones = Array.from({ length: 24 });
  return (
    <div className="container mt-4">
      <div className="row g-3">
        {canciones.map((_, i) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
            <SongCards />
          </div>
        ))}
      </div>
    </div>
  )
}


import React from 'react'

export const Formulario = () => {
  return (
    <div>
     
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-12">
          <div className="card shadow-lg rounded-4">
            <div className="card-header text-center bg-dark text-white rounded-top-4">
              <h2>Petición de Canción</h2>
            </div>
            <div className="card-body">
              <form>
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombreUsuario" className="form-label">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreUsuario"
                    placeholder="Escribe tu nombre"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="emailUsuario" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailUsuario"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                {/* Canción */}
                <div className="mb-3">
                  <label htmlFor="nombreCancion" className="form-label">
                    Nombre de la canción
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreCancion"
                    placeholder="Ejemplo: Bohemian Rhapsody"
                  />
                </div>

                {/* Artista */}
                <div className="mb-3">
                  <label htmlFor="artista" className="form-label">
                    Artista
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="artista"
                    placeholder="Ejemplo: Queen"
                  />
                </div>

                {/* Género */}
                <div className="mb-3">
                  <label htmlFor="genero" className="form-label">
                    Género musical
                  </label>
                  <select className="form-select" id="genero">
                    <option value="">Selecciona un género</option>
                    <option>Pop</option>
                    <option>Rock</option>
                    <option>Reguetón</option>
                    <option>Electrónica</option>
                    <option>Clásica</option>
                    <option>Otro</option>
                  </select>
                </div>

                {/* Comentarios */}
                <div className="mb-3">
                  <label htmlFor="comentarios" className="form-label">
                    Comentarios adicionales
                  </label>
                  <textarea
                    className="form-control"
                    id="comentarios"
                    rows="3"
                    placeholder="¿Por qué quieres que agreguemos esta canción?"
                  ></textarea>
                </div>

                {/* Botón */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-secondary">
                    Enviar petición
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              ¡Gracias por tu sugerencia!
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


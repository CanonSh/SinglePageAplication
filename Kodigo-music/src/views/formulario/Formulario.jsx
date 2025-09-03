import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router';

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert("¡Gracias por tu sugerencia!");
    navigate("/");
  };

  return (
    <div>  
      <Link to={"/"} className='btn btn-primary'>Volver a inicio</Link>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-6">
          <div className="card shadow-lg rounded-4">
            <div className="card-header text-center bg-dark text-white rounded-top-4">
              <h2>Petición de Canción</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Nombre */}
                <div className="mb-3">
                  <label className="form-label">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.nombreUser ? "is-invalid" : ""}`}
                    placeholder="Escribe tu nombre"
                    /* */
                    {...register("nombreUser",{required:"Nombre obligatorio"})}
                  />
                  {errors.nombreUser && (
                    <div className="invalid-feedback">{errors.nombreUser.message}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.emailUser ? "is-invalid" : ""}`}
                    placeholder="ejemplo@correo.com"
                    {...register("emailUser", {
                      required: "Email obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email inválido"
                      }
                    })}
                  />
                  {errors.emailUser && (
                    <div className="invalid-feedback">{errors.emailUser.message}</div>
                  )}
                </div>

                {/* Canción */}
                <div className="mb-3">
                  <label  className="form-label">
                    Nombre de la canción
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.nombreSong ? "is-invalid" : ""}`}
                    placeholder="Ejemplo: Vodka Cranberry"
                    {...register("nombreSong", { required: "Nombre de la canción obligatorio" })}
                  />
                  {errors.nombreSong && (
                  <div className="invalid-feedback">{errors.nombreSong.message}</div>
                )}
                </div>

                {/* Artista */}
                <div className="mb-3">
                  <label htmlFor="artista" className="form-label">
                    Artista
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.artista ? "is-invalid" : ""}`}
                    placeholder="Ejemplo: Queen"
                    {...register("artista",{required:"Artista obligatorio"})}
                  />
                  {errors.artista && (
                    <div className="invalid-feedback">{errors.artista.message}</div>
                  )}
                </div>

                {/* Género */}
                <div className="mb-3">
                  <label className="form-label">
                    Género musical
                  </label>
                  <select className={`form-select ${errors.genero ? "is-invalid" : ""}`} 
                  {...register("genero",{required:"Género obligatorio"})}>
                    <option value="">Selecciona un género</option>
                    <option>Pop</option>
                    <option>Rock</option>
                    <option>Reguetón</option>
                    <option>Electrónica</option>
                    <option>Clásica</option>
                    <option>Otro</option>
                  </select>
                  {errors.genero && (
                    <div className="invalid-feedback">{errors.genero.message}</div>
                  )}
                </div>

                {/* Comentarios */}
                <div className="mb-3">
                  <label className="form-label">
                    Comentarios adicionales
                  </label>
                  <textarea
                    className={`form-control ${errors.comentarios ? "is-invalid" : ""}`}
                    rows="3"
                    placeholder="¿Por qué quieres que agreguemos esta canción?"
                    {...register("comentarios", { maxLength: { value: 200, message: "Máximo 200 caracteres" } })}
                  ></textarea>
                  {errors.comentarios && (
                    <div className="invalid-feedback">{errors.comentarios.message}</div>
                  )}
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


import React from 'react'
import portada from "../assets/portada.png"
export const Reproductor = () => {
  return (
    <div style={styles.reproductor}>
        {/*Portada*/}
        <img src={portada}style={styles.portada} alt="Portada" />
                {/*Informacion de la cancion*/}
        <div style={styles.info}>
            <h5 style={{margin:0}}>Vodka Cranberry</h5>
            <p style={{margin:0,fontSize:"1rem",color:"#eeeeeeff"}}>Conan Gray</p>
        </div>
        {/*Botones de reproduccion*/}
        <div style={styles.controles}>
            <button style={styles.btn}>⏮️</button>
            <button style={styles.btn}>▶️</button>
            <button style={styles.btn}>⏭️</button>
        </div>   


    </div>
  )
}

const styles={
    reproductor:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "12px 16px",
        borderRadius: "12px",
        background: "#000000ff",
        color: "white",
        width: "50%",
       position:"fixed",
        bottom: "0",
    },
    portada:{
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover",
    },
    btn: {
    fontSize: "1.5rem",
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    },
    info:{
      flexGrow:1,
    },
    controles: {
    display: "flex",
    gap: "10px",
    marginLeft: "2rem",
  },

}
import React from 'react'
import { Reproductor } from '../../components/reproductor'
import { Biblioteca } from '../biblioteca/biblioteca'

export const Home = () => {
  return (
    <div >
      <Biblioteca />
      <Reproductor />
    </div>
  )
}


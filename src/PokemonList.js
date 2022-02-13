import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}

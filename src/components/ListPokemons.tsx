import { useEffect, useState } from "react"
import CardPokemon from "./CardPokemon"

const ListPokemons = () => {
  const [dataPoke, setDataPoke] = useState([])
  const leerDatos = async () => {
    const res = await fetch("pokemon.json")
    const data = await res.json()

    setDataPoke(data.pokemon)



  }
  useEffect(() => {
    leerDatos()
  }, [])

  return (
    <div className="flex px-4 py-7 flex-wrap gap-6 justify-center">
      {dataPoke.map(elemento => (
        <CardPokemon key={elemento.num} imagen={elemento.img} nombrePokemon={elemento.name} />
      ))}

    </div>
  )
}

export default ListPokemons
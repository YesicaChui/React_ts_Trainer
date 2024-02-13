interface CardPokemonProps{
  imagen:string,
  nombrePokemon: string
}
const CardPokemon: React.FC<CardPokemonProps> = ({imagen, nombrePokemon}) => {
  return (
    <div className="bg-[#d5ead7] rounded-xl flex flex-col justify-center items-center p-2  w-[40%] sm:w-[30%] lg:w-[18%] ">
        <img src={imagen} className="w-[100%]" alt="" />
        <p className="font-semibold" >{nombrePokemon}</p>
      </div>
  )
}

export default CardPokemon
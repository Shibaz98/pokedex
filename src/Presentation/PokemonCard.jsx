import './PokemonCard.css'

const PokemonCard = ({cardName, cardAbility_one, cardAbility_two, cardImage}) =>{
    return(
        <>      
        <div className='cardContainerTwo'>
            <div className="cardTwo">
                <h1>Name:{cardName}</h1>
                <img className='pokemon_imageTwo' src={cardImage}/>
                <p>Abilities:{cardAbility_one}, {cardAbility_two}</p>
            </div>
        </div>
    </>  
    )
};

export default PokemonCard; 
import './formStyles.css'

const PokeDisplay = ({name, image, ability_one, ability_two}) =>{
    return(
      <>      
        <div className='cardContainer'>
            <div className="card">
                <img/> 
                <h1>Name:{name}</h1>
                <img className='pokemon_image' src={image}/>
                <p>Abilities:{ability_one}, {ability_two}</p>
            </div>
        </div>
    </>  
    );
}

export default PokeDisplay; 
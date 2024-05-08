import React, {useState, useEffect} from 'react'; 
import './formComponent.css' ;
import PokeDisplay from '../Presentation/Components/form';
import PokemonCard from '../Presentation/PokemonCard';


// Here I create state setters for each state that I want, I use these states as props for my presentational component

const SearchComponent = () =>{
    const [search, setSearch] = useState(''); 
    const [PokemonName, setPokemonName] = useState('');
    const [Image, setImage] = useState('');
    const [FirstAbility, setFirstAbility] = useState('');
    const [SecondAbility, setSecondAbility] = useState('');
    const [Pokemon, setPokemon] = useState([])  

// Handles the change for the event argument, the event in this case is every time I type into the search 

    const handleChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value.toLowerCase()); // Sets that search state to the value of whatever I type e.g. Pikachu is now saved to the search state
        
    };

    // UseEffect to load resultsfrom my API
    useEffect(()=>{

        const apiKey = `https://pokeapi.co/api/v2/pokemon/${search}`
    
        if(search){
            const getData = async () =>{
                try{
    
                    const response = await fetch(apiKey); 
    
                    if(response.ok){
                        const jsonResponse = await response.json(); 
                        displayData(jsonResponse)
                    }
                     else{
                        throw new Error('Request failed')
                    }
    
                }
    
    
                catch(error){
                    console.log(error)
                }
            }
            getData();     
        }

        

    }, [{search}]);
//I display the data outside of the useEffect so I can access the states I need in my return section

// I use state setters to set the state of each part of the data object, this lets me pass the state as props to the PokeDisplay element
    const displayData = (data) => {
        const PokemonName = data.name
        const Image = data.sprites.front_default; 
        const Ability_one = data.abilities[0].ability.name;
        const Ability_two = data.abilities[1].ability.name; 
        setPokemonName(PokemonName); 
        setImage(Image); 
        setFirstAbility(Ability_one);
        setSecondAbility(Ability_two); 

      

     };
     
     const newPokemon = {
        name: PokemonName,
        image: Image, 
        ability_one: FirstAbility,
        ability_two: SecondAbility, 
    }; 

    const handleClick = () =>{
        if(Pokemon.length < 3){
            setPokemon((prev)=>[...prev, newPokemon])
            console.log(Pokemon)
        } else{
            alert('Can only add 3 to collection')
        }


        
    }


// In Pokedisplay I pass on the state from the above state setters as props 
    return(
        <>
         <div className='header'>
            <h1>Choose three starter pokemon!</h1>
         </div> 
          <div className='inputContainer'>
            <input className="inputfield" type='text' placeholder='Enter Pokemon' onChange={handleChange}/>
            <button onClick={handleClick}>Add to collection</button>
          </div>
          <PokeDisplay name={PokemonName} image={Image} ability_one={FirstAbility} ability_two={SecondAbility}/>
          <div className='PokemonCardContainer'>
            {Pokemon.map((currentPokemon, index) =>
                <PokemonCard key={index} cardName={currentPokemon.name} cardAbility_one={currentPokemon.ability_one} cardAbility_two={currentPokemon.ability_two} cardImage={currentPokemon.image}/>  
            )}
          </div>
            
        </>
    )
};

export default SearchComponent
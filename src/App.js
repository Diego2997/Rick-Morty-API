
import './App.css';
import imageRickMorty from './images/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null)

  const requestApi = async() =>{
    const api =  await fetch ("https://rickandmortyapi.com/api/character/")
    const characterApi = await api.json()
    console.log(characterApi)
    
    setCharacters(characterApi.results)
   
  }

  return (
    <div className="App">
        <header className='App-header'>
          <h1 className='title'>Rick & Morty</h1>
          { ( characters  )
           ? <Characters characters={characters} setCharacters={setCharacters}/> 
          :
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home'/>
          <button onClick={requestApi} className="btn-search">Buscar Personajes</button>
          </>}
          
        </header>
    </div>
  );
}

export default App;

import './App.css';
import Cards from './components/cards'
const App = () => {

  return (
    <div className="App">

      <img className = "banner" src="https://heroic-pixie-6d7f91.netlify.app/awning.png" alt="banner"/>
      <h1>Local Favorites in SoCal</h1>
      <Cards />

    </div>
  )
}

export default App
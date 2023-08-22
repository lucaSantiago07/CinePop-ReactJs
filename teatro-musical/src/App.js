
import './App.css';
import Header from './components/header/header.js'
import  BannerContent  from './components/banner/banner.js';
import Movies from './components/Filmes/movies.js';


function App() {
  return (
    <div className='bodyApp'>
      <Header/>
      <BannerContent/>
      <Movies/>  
      
    </div>
  );
}

export default App;

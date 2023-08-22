import  "./header.css";
import React from "react";

export default function Header () {
  const ativo = true  
  return (
        <header>
            <div className="title-Header">
                <h1 className={ativo ? 'brown' : 'blue' }>CinePop</h1>
            </div>
            <div className='menu'>
                    <a>Home</a>
                    <a href='#FilmesDisponiveis'>Filmes disponíveis</a>
                    <a>Compre seu ingresso</a>
                </div>
        </header>
    )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
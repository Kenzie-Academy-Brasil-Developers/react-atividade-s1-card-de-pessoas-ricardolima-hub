import './App.css';

import PersonCard from './components/Developer';

function App() {
  const userName = [
    {name: "Jane", age: 30, country: "Gana"},
    {name: "Joe", age: 41, country: "Brunei"},
    {name: "Etimoni", age: 27, country: "Tuvalu"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        {userName.map((item) => {
          return (
            <PersonCard name={item.name} age={item.age} country={item.country}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map(item => {
    return <Card 
    key={item.id}
    item={item}
    />
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className='card-section'>
        {cards}
        </section>

    </div>
  );
}

export default App;

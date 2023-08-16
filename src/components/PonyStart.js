import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PonyCard from './PonyCard'; // Import the PonyCard component
import './PonyStart.css';

const PonyStart = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://ponyapi.net/v1/character/all');
      setCharacters(response.data.data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <h1>My Little Pony Characters</h1>
      <div className="pony-cards">
        {characters.map((character) => (
          <PonyCard key={character.id} pony={character} />
        ))}
      </div>
    </div>
  );
};

export default PonyStart;

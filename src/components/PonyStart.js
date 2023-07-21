import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
  console.log(characters);

  return (
    <div className="container">
      <h1>My Little Pony Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <strong>Name:</strong> {character.name}
            <br />
            <strong>Alias:</strong> {character.alias}
            <br />
            <strong>Residence:</strong> {character.residence}
            <br />
            <img src={character.image[0]} alt={character.name} style={{ maxWidth: '300px' }} />
            <br />

            <Link to={`/character/${character.id}`}>Details</Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PonyStart;
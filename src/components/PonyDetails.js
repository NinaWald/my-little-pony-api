import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PonyDetails.css';
import CharacterImages from './CharacterImages';

const PonyDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    // console.log('Received ID:', id);
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(`https://ponyapi.net/v1/character/${id}`);
        setCharacter(response.data.data[0]);
        console.log('Fetched character details:', response.data.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };
    fetchCharacterDetails();
  }, [id]);

  console.log('Character state:', character);

  if (!character || Object.keys(character).length === 0) {
    console.log('Character is null or empty, returning Loading...');
    return <div>Loading...</div>;
  }
  return (
    <div className="details-container">
      <h2>Name: {character.name}</h2>
      <h2>Alias: {character.alias}</h2>
      <h2>Residence: {character.residence}</h2>
      <CharacterImages characterId={id} />
      <Link to="/" className="back-button">
        <button type="button" className="back-button-content">
          Back to all characters
          <span className="arrow">←</span>
        </button>
      </Link>
    </div>
  );
};

export default PonyDetails;

/*
<div className="image-container">
        {character.image.map((image, index) => (
          <img
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            src={image}
            alt={`${character.name} - ${index + 1}`}
            style={{ maxWidth: '300px' }} />
        ))}
      </div>
         <div className="kind-container">
        <p>Kind:</p>
        <ul>
          {character.kind.map((kind, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{kind}</li>
          ))}
        </ul>
      </div>
*/
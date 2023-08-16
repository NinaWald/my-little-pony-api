import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterImages = ({ characterId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      try {
        const response = await axios.get(`https://ponyapi.net/v1/image/by-character/${characterId}`);
        setImages(response.data.data);
        console.log('Fetched character images:', response.data.data);
      } catch (error) {
        console.error('Error fetching character images:', error);
      }
    };
    fetchCharacterImages();
  }, [characterId]);

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.name} style={{ maxWidth: '300px' }} />
            <p>{image.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterImages;

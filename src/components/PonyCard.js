import React from 'react';
import { Link } from 'react-router-dom';

const PonyCard = ({ pony }) => {
  return (
    <div className="pony-card" key={pony.id}>
      <Link to={`/character/${pony.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="card-image">
          <img src={pony.image[0]} alt={pony.name} style={{ maxWidth: '300px' }} />
        </div>
        <div className="pony-name">
          {pony.name}
        </div>
      </Link>
    </div>
  );
};

export default PonyCard;

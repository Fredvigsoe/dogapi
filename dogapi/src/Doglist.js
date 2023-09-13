import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Brug Axios til at hente data fra API'en
    axios
      .get('https://api.thedogapi.com/v1/images/search?limit=10')
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error('Fejl: ' + error);
      });
  }, []);

  return (
    <div>
      <h1>10 tilfældige hunde</h1>
      <ul className="image-container">
        {dogs.map((dog) => (
          <li key={dog.id}>
            <img  src={dog.url} alt="Hundebillede" className="dogs" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;

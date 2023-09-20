import React, { useState, useEffect } from 'react';
import axios from 'axios';




export function RandomDogs() {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    // Fetch random dog images
    axios
      .get('https://api.thedogapi.com/v1/images/search?limit=10')
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error('Error: ' + error);
      });

    // Fetch list of dog breeds
    axios
      .get('https://api.thedogapi.com/v1/breeds')
      .then((response) => {
        setBreeds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching breeds: ' + error);
      });
  }, []);

  // Function to find breed by reference_image_id
  const findBreedByReferenceId = (referenceId) => {
    return breeds.find((breed) => breed.reference_image_id === referenceId);
  };

  return (
    <div>
      <h1>10 tilfældige hunde</h1>
      <ul className="image-container">
        {dogs.map((dog) => {
          // Find the breed by matching reference_image_id
          const breed = findBreedByReferenceId(dog.id);

          return (
            <li key={dog.id}>
              <img src={dog.url} alt="Hundebillede" className="dogs" />
              {breed && <p>Breed: {breed.name}</p>}
            </li>
          );
        })}
      </ul>
      <p> The pictures where "Breed" is not shown, is due to lack of data from the API</p>
    </div>
    
  );
}

export function ShibaInu() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        // Brug Axios til at hente data fra API'en
        axios
          .get('https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=222&api_key=live_xadxbBK6yiEzCiPBOZj34k8MX4o1peHlV5dRrQPXLQFaU6lkhWzQw6d9fcE6hL6y')
          .then((response) => {
            setDogs(response.data);
          })
          .catch((error) => {
            console.error('Fejl: ' + error);
          });
      }, []);
    
      return (
        <div>
          <ul className="image-container">
            {dogs.map((dog) => (
              <li key={dog.id}>
                <img  src={dog.url} alt="Hundebillede" className="dogs" />
                <div>
                     <p> RACE: {dog.breeds[0]?.name}</p>
                     <p>LIFE SPAN: {dog.breeds[0]?.life_span}</p>
                     <p>TEMPERAMENT: {dog.breeds[0]?.temperament}</p>
                    <p>WEIGHT: {dog.breeds[0]?.weight?.metric} Kilograms</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export function AlaskanHusky() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        // Brug Axios til at hente data fra API'en
        axios
          .get('https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=8&api_key=live_xadxbBK6yiEzCiPBOZj34k8MX4o1peHlV5dRrQPXLQFaU6lkhWzQw6d9fcE6hL6y')
          .then((response) => {
            setDogs(response.data);
          })
          .catch((error) => {
            console.error('Fejl: ' + error);
          });
      }, []);
    
      return (
        <div>
          <ul className="image-container">
            {dogs.map((dog) => (
              <li key={dog.id}>
                <img  src={dog.url} alt="Hundebillede" className="dogs" />
                <div>
                     <p> RACE: {dog.breeds[0]?.name}</p>
                     <p>LIFE SPAN: {dog.breeds[0]?.life_span}</p>
                     <p>TEMPERAMENT: {dog.breeds[0]?.temperament}</p>
                    <p>WEIGHT: {dog.breeds[0]?.weight?.metric} kilograms</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export function Affenpinscher() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        // Brug Axios til at hente data fra API'en
        axios
          .get('https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=1&api_key=live_xadxbBK6yiEzCiPBOZj34k8MX4o1peHlV5dRrQPXLQFaU6lkhWzQw6d9fcE6hL6y')
          .then((response) => {
            setDogs(response.data);
          })
          .catch((error) => {
            console.error('Fejl: ' + error);
          });
      }, []);
    
      return (
        <div>
          <ul className="image-container">
            {dogs.map((dog) => (
              <li key={dog.id}>
                <img  src={dog.url} alt="Hundebillede" className="dogs" />
                <div>
                     <p> RACE: {dog.breeds[0]?.name}</p>
                     <p>LIFE SPAN: {dog.breeds[0]?.life_span}</p>
                     <p>TEMPERAMENT: {dog.breeds[0]?.temperament}</p>
                    <p>WEIGHT: {dog.breeds[0]?.weight?.metric} kilograms</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

